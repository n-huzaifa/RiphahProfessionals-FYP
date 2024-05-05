import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { firestore, doc, getDoc } from '../../firebase'

function AlumniProfile() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  const [user, setUser] = useState(null)
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const id = params.get('id')

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true) // State to track loading

  useEffect(() => {
    if (!id) {
      navigate('/alumni')
    } else {
      // Fetch user data from Firestore
      const fetchUserData = async () => {
        try {
          const docRef = doc(firestore, 'users', id)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            setUser(docSnap.data())
          } else {
            // docSnap.data() will be undefined in this case
            console.log('No such document!')
          }
        } catch (error) {
          console.error('Error fetching document:', error)
        } finally {
          setLoading(false) // Set loading to false when data fetching is complete
        }
      }

      fetchUserData()
    }
  }, [id, navigate])

  return (
    <>
      {/* <!-- Navbar --> */}
      <Header />
      {/* <!-- Main Section --> */}
      <section>
        {loading ? ( // Conditionally render loader while loading
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="p-3 p-md-5 border m-2 m-md-5">
            <div className="d-block d-md-flex justify-content-between align-items-center">
              {/* <!-- Avatar Box  --> */}
              <div>
                <div className="border mb-2">
                  {user?.gender === 'Male' ? (
                    <img src="images/Male.jpg" className="card-img-top" alt="..." />
                  ) : (
                    <img src="images/Female.jpg" className="card-img-top" alt="..." />
                  )}
                </div>
                <h2 className="primary-font fw-bold mb-4 mb-0">{user?.name}</h2>
              </div>
              {/* <!-- Contact Box --> */}
              <div className="border rounded-2 p-3 mb-4 mb-0">
                <p className="text-muted fw-semibold fs-5">Contact</p>
                <div className="mb-3">
                  <a href={`tel:+${user?.number}`} className="text-decoration-none text-info mb-2">
                    <i className="bi bi-telephone-fill mx-2">{user?.number}</i>
                  </a>
                </div>
                <div className="mb-3">
                  <a href={`mailto:${user?.email}`} className="text-decoration-none text-info">
                    <i className="bi bi-envelope-at-fill mx-2"></i>
                    {user?.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Details Box --> */}
              <div className="col-md-6">
                <div className="border rounded-2 p-3 mb-3 mb-0 text-muted">
                  <h3 className=" fw-bold">Details</h3>
                  <p className="fw-semibold fs-6 mb-0">
                    <i className="bi bi-rocket-takeoff-fill mx-1"></i>Department
                  </p>
                  <div className="mx-3 mb-2">{user?.department}</div>
                  <p className="fw-semibold fs-6 mb-0">
                    <i className="bi bi-calendar-minus-fill mx-1"></i>Session
                  </p>
                  <div className="mx-3 mb-2">{user?.session}</div>
                  <p className="fw-semibold fs-6 mb-0">
                    <i className="bi bi-geo-alt-fill mx-1"></i>Working Place
                  </p>
                  <div className="mx-3 mb-2">{user?.location}</div>
                  <p className="fw-semibold fs-6 mb-0">
                    <i className="bi bi-person-fill-gear mx-1"></i>Role of your Job
                  </p>
                  <div className="mx-3">{user?.job}</div>
                </div>
              </div>
              {/* <!-- Skills Box --> */}
              <div className="col-md-6">
                <div className="skills border rounded-2 p-3 mb-3 mb-0">
                  <p className="text-muted fw-semibold fs-5">
                    <i className="bi bi-gear-fill mx-1"></i>Skills
                  </p>
                  <div>
                    <p className="text-secondary mb-0 fs-6 fw-semibold">Web development</p>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar rounded progress-bar-striped progress-bar-animated"
                        style={{ width: '30%', height: '10px' }}
                      ></div>
                    </div>
                    <p className="text-secondary mb-0 fs-6 fw-semibold">Graphic designing</p>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar rounded progress-bar-striped progress-bar-animated"
                        style={{ width: '78%', height: '10px' }}
                      ></div>
                    </div>
                    <p className="text-secondary mb-0 fs-6 fw-semibold">Affiliate Marketing</p>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar rounded progress-bar-striped progress-bar-animated"
                        style={{ width: '98%', height: '10px' }}
                      ></div>
                    </div>
                    <p className="text-secondary mb-0 fs-6 fw-semibold">Search Engine Optimisation</p>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar rounded progress-bar-striped progress-bar-animated"
                        style={{ width: '68%', height: '10px' }}
                      ></div>
                    </div>
                    <p className="text-secondary mb-0 fs-6 fw-semibold">Flutter</p>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar rounded progress-bar-striped progress-bar-animated"
                        style={{ width: '38%', height: '10px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Review --> */}
            <div className="review">
              <p className="text-muted fw-semibold fs-5 mb-1">Review About University</p>
              <p className="text-muted mb-4">{user?.review}</p>
            </div>
          </div>
        )}
      </section>
      {/* <!-- Footer --> */}
      <footer className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis" id="copyright">
        © 2024 All rights reserved By Riphah International University Computer Science Department
      </footer>
    </>
  )
}

export default AlumniProfile
