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
import { firestore, collection, getDocs } from '../../firebase'
import { isEmpty } from 'lodash'

function Profile() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const id = params.get('id')
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userCollectionRef = collection(firestore, 'users')
      const querySnapshot = await getDocs(userCollectionRef)
      const data = []
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      })
      setUserData(data[0])
      console.log(data[0])
    }

    fetchData()
  }, [])
  const info = (
    <>
      <BasicInfo userData={userData} />
      <div className="col-12 col-md-8 p-0">
        <TabNav userData={userData} />
      </div>
    </>
  )

  const attendance = <Attendance />

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      {/* <!-- Navbar --> */}
      <Header />
      {isEmpty(userData) ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
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
              {id === 'attendance' ? attendance : info}
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
