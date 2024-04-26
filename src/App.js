import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Clock from './components/Clock'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      {/* Navbar */}
      <header id="Header" className="px-2 px-md-4 py-2 border-bottom" data-aos="fade-down">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src="/images/RipLogo.png" className="w-100" alt="logo" />
          </div>
          <div className="text-center d-none d-md-inline">
            <div className="primary-font fw-bold fs-4 text-primary-emphasis text-shadow">
              RIPHAH INTERNATIONAL UNIVERSITY FAISALABAD CAMPUS
            </div>
            <small className="text-warning-emphasis fw-semibold text-shadow">
              Establishment of Educational Institutions with a focus on inculcating Islamic ethical values
            </small>
            <div className="text-info fw-semibold my-1 text-shadow">WEB EDUCATIONAL PORTAL</div>
          </div>
          <div className="text-center">
            <div className="text-success sm-txt text-shadow">Main Satyana Road Faisalabad Near Fish Farm</div>
            <div className="text-success sm-txt text-shadow">Phone: +92 41 8777 210, +92 41 8777 310</div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="p-0 p-md-4">
        <div className="row g-0">
          <div className="col-md-8 d-none d-md-inline bg-light shadow-sm" data-aos="fade-in">
            <div className="primary-font text-danger fw-bold fs-3 m-4 text-shadow">
              Riphah International University Faisalabad Campus
            </div>
            <div className="d-flex justify-content-between px-4">
              {/* <!-- Clock Box --> */}
              <div className=" ">
                <div className="px-5">
                  <Clock />
                </div>
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
          <div className="col-md-4 col-12" data-aos="fade-in">
            <div className="border shadow-sm m-2">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-underline mb-4 px-0 px-md-1" id="myTab" data-aos="flip-up">
                <li className="nav-item">
                  <button
                    className="nav-link text-secondary active"
                    data-bs-toggle="pill"
                    data-bs-target="#Graduatelogin"
                  >
                    <i className="bi bi-mortarboard-fill mx-1"></i>Alumni
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-secondary" data-bs-toggle="pill" data-bs-target="#Registrationlogin">
                    <i className="bi bi-cursor-fill mx-1"></i>Registration
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-secondary" data-bs-toggle="pill" data-bs-target="#studentlogin">
                    <i className="bi bi-person-fill mx-1"></i>login
                  </button>
                </li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-3" id="Graduatelogin">
                  <form>
                    <div className="mb-3">
                      <label for="CNIC1" className="form-label">
                        CNIC
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="CNIC1" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="RollNumber1" className="form-label">
                        Roll Number
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="RollNumber1" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="Password1" className="form-label">
                        Password
                      </label>
                      <div className="input-group mb-2">
                        <input type="password" className="form-control" id="Password1" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill-lock"></i>
                        </span>
                      </div>
                      <a href="google.com" className="text-decoration-none">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input rounded-0" id="checkbox1" />
                      <label className="form-check-label" for="checkbox1">
                        Stay signed in
                      </label>
                    </div>
                    <div className="d-flex justify-content-end bg-light border-top">
                      <a href="Graduate-login.html" className="m-4 style-btn text-decoration-none">
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Login</span>
                      </a>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade p-3" id="Registrationlogin">
                  <form>
                    <div className="mb-3">
                      <label for="CNIC2" className="form-label">
                        CNIC
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="CNIC2" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="RollNumber2" className="form-label">
                        Roll Number
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="RollNumber2" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="Password2" className="form-label">
                        Password
                      </label>
                      <div className="input-group mb-2">
                        <input type="password" className="form-control" id="Password2" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="ConfirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <input type="password" className="form-control" id="ConfirmPassword" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end bg-light border-top">
                      <button className="m-4 style-btn" type="submit">
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Register</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade p-3" id="studentlogin">
                  <form>
                    <div className="mb-3">
                      <label for="CNIC3" className="form-label">
                        CNIC
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="CNIC3" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="RollNumber3" className="form-label">
                        Roll Number
                      </label>
                      <div className="input-group">
                        <input type="number" className="form-control" id="RollNumber3" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill mx-1"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="Password3" className="form-label">
                        Password
                      </label>
                      <div className="input-group mb-2">
                        <input type="password" className="form-control" id="Password3" />
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="bi bi-person-fill-lock"></i>
                        </span>
                      </div>
                      <a href="google.com" className="text-decoration-none">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input rounded-0" id="checkbox2" />
                      <label className="form-check-label" for="checkbox2">
                        Stay signed in
                      </label>
                    </div>
                    <div className="d-flex justify-content-end bg-light border-top">
                      <a href="Student-profile.html" className="m-4 style-btn text-decoration-none">
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Login</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center py-2 d-block d-lg-none">
              <a href="https://riphahfsd.edu.pk/" target="_blank" className="btn btn-info text-white" rel="noreferrer">
                visit university
              </a>
              <a
                href="https://riphahfsd.edu.pk/"
                target="_blank"
                className="btn btn-warning text-white"
                rel="noreferrer"
              >
                visit compus
              </a>
            </div>
            <div className="text-center text-muted fs-5 pt-2">GET IN TOUCH</div>
            {/* <!-- Social Links --> */}
            <div className="d-flex justify-content-center mt-2 mb-4">
              <a
                href="https://www.facebook.com/Riphahfaisalabad/"
                target="_blank"
                className="mx-1 rounded rounded-2 text-white bg-info px-2 py-1"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/riphahuniversityfsd?igsh=YXViZGVhc3YxNTl1"
                target="_blank"
                className="mx-1 rounded rounded-2 text-white bg-danger px-2 py-1"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://pk.linkedin.com/company/riphah-international-university-faisalabad-campus"
                target="_blank"
                className="mx-1 rounded rounded-2 text-white bg-warning px-2 py-1"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis text-shadow"
        id="copyright"
      >
        {/* Footer content goes here */}
      </footer>
    </>
  )
}

export default App
