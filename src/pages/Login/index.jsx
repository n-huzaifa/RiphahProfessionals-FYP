import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Clock from '../../components/Clock'
import Navbar from './Navbar'
import LoginForms from './LoginForms'

function Login({ setUser }) {
  const [activeTab, setActiveTab] = useState('Graduatelogin')

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="p-0 p-md-4">
        <div className="row g-0">
          <div className="col-md-8 d-none d-md-inline bg-light shadow-sm" data-aos="fade-in">
            <div className="primary-font text-danger fw-bold fs-3 m-4 text-shadow">
              Riphah International University Faisalabad Campus
            </div>
            <div className="d-flex justify-content-between px-4">
              {/* <!-- Clock Box --> */}

              <div className="px-5">
                <Clock />
              </div>

              {/* <!-- Image Box --> */}
              <div className="d-none d-lg-inline">
                <img src="images/RiphahLogoMain.png" alt="" className="h-[340px]" />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="p-3">
                <div className="mb-2 d-none d-lg-block">
                  <a
                    href="https://riphahfsd.edu.pk/"
                    target="_blank"
                    className="btn btn-info text-white mb-1"
                    rel="noreferrer"
                  >
                    visit university
                  </a>
                  <a
                    href="https://riphahfsd.edu.pk/"
                    target="_blank"
                    className="btn btn-warning text-white"
                    rel="noreferrer"
                  >
                    visit campus
                  </a>
                </div>
                <div className="text-muted">
                  <div className="fw-semibold">About Riphah International University</div>
                  <p>
                    Welcome to Riphah International University Faisalabad Campus, To cater the needs of millions of
                    students of Faisalabad and surrounding areas, Riphah launched a new educational institute namely
                    Riphah Faisalabad which is an integral part of Riphah international University Islamabad.
                  </p>
                </div>
              </div>
              <div className="p-3 d-flex align-items-end">
                <div className="text-muted">
                  <div className="fw-semibold">HEC Approved Campus</div>
                  <p>
                    Riphah International University, Faisalabad In General medium sized universities Ranked No.1 private
                    and No.6 overall in the category by the Higher Education Commission (HEC) of Pakistan and soon was
                    included in the top five universities in the private sector who qualify to receive research grants
                    from the Government of Pakistan through the HEC.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Login form Box --> */}
          <LoginForms activeTab={activeTab} handleTabChange={handleTabChange} setUser={setUser} />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis text-shadow"
        id="copyright"
      >
        © 2024 All rights reserved By Riphah International University Computer Science Department
      </footer>
    </>
  )
}

export default Login
