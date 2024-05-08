import React, { useEffect, useState } from 'react'
import Header from './Header'
import BreadCrumbs from './BreadCrumbs'
import SideNav from './SideNav'
import BasicInfo from './BasicInfo'
import TabNav from './TabNav'
import SkillsModal from './SkillsModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.css'
import Attendance from './Attendance'
import { useLocation } from 'react-router-dom'
import { firestore, collection, getDocs, auth } from '../../firebase'
import { isEmpty } from 'lodash'
import { query, where } from 'firebase/firestore'
import AlumniChat from '../AlumniChat'

function Profile() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const id = params.get('id')
  const [userData, setUserData] = useState([])
  const currentUser = auth.currentUser
  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const cnic = currentUser.email?.split('@')[0]
        const userCollectionRef = collection(firestore, 'users')
        const q = query(userCollectionRef, where('cnic', '==', cnic))
        const querySnapshot = await getDocs(q)
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setUserData({ id: doc.id, ...doc.data() })
          })
        } else {
          console.log('No matching documents.')
        }
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const info = (
    <>
      <BasicInfo userData={userData} />
      <div className="col-12 col-md-8 p-0">
        <TabNav userData={userData} />
      </div>
    </>
  )

  const attendance = <Attendance userData={userData} />

  const alumnichat = <AlumniChat userData={userData} />

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      {/* <!-- Navbar --> */}
      <Header />
      {isEmpty(userData) ? (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <>
          {/* <!-- breadcrumb --> */}
          <BreadCrumbs userData={userData} />
          <section>
            <div className="row m-0">
              <div className="col-2 d-lg-inline d-none p-0">
                <SideNav />
              </div>
              {id === 'attendance' ? attendance : id === 'alumni-chat' ? alumnichat : info}
            </div>
          </section>
        </>
      )}

      {/* <!-- Footer --> */}
      <footer
        className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis text-shadow"
        id="copyright"
      >
        © 2024 All rights reserved By Riphah International University Computer Science Department
      </footer>
      {/* <!-- offcanvas --> */}
      {/* <OffCanvas /> */}
      {/* <!-- Modal --> */}
      <SkillsModal />
    </>
  )
}

export default Profile
