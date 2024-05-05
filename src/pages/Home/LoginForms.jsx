import React, { useContext, useState } from 'react'
import { auth, createUserWithEmailAndPassword, doc, firestore, setDoc } from '../../firebase'

import UserContext from '../../UserContext'

function LoginForms({ activeTab, handleTabChange }) {
  const [cnic, setCNIC] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [password, setPassword] = useState('')

  // Access the UserContext
  const { setUser } = useContext(UserContext)

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, `${cnic}@example.com`, password)
      const user = userCredential.user

      await setDoc(doc(firestore, 'users', user.uid), {
        cnic: cnic,
        rollNo: rollNumber,
      })

      // Update the user context
      setUser(user)
      console.log('SignUp Successful')
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <div className="col-md-4 col-12" data-aos="fade-in">
      <div className="border shadow-sm m-2 p-3">
        {/* Nav tabs */}
        <ul className="nav nav-underline mb-4 px-0 px-md-1" id="myTab" data-aos="flip-up">
          <li className="nav-item">
            <button
              className={`nav-link text-secondary ${activeTab === 'Graduatelogin' ? 'active' : ''}`}
              onClick={() => handleTabChange('Graduatelogin')}
            >
              <i className="bi bi-mortarboard-fill mx-1"></i>Alumni
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-secondary ${activeTab === 'Registrationlogin' ? 'active' : ''}`}
              onClick={() => handleTabChange('Registrationlogin')}
            >
              <i className="bi bi-cursor-fill mx-1"></i>Registration
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-secondary ${activeTab === 'studentlogin' ? 'active' : ''}`}
              onClick={() => handleTabChange('studentlogin')}
            >
              <i className="bi bi-person-fill mx-1"></i>Login
            </button>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content" id="myTabContent">
          <div className={`tab-pane fade show ${activeTab === 'Graduatelogin' ? 'active' : ''}`} id="Graduatelogin">
            <form>
              <div className="mb-3">
                <label htmlFor="CNIC1" className="form-label">
                  CNIC
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="CNIC1"
                    value={cnic}
                    onChange={(e) => setCNIC(e.target.value)}
                  />
                  <span className="input-group-text" id="addon-wrapping">
                    <i className="bi bi-person-fill mx-1"></i>
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="RollNumber1" className="form-label">
                  Roll Number
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="RollNumber1"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                  />
                  <span className="input-group-text" id="addon-wrapping">
                    <i className="bi bi-person-fill mx-1"></i>
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="Password1" className="form-label">
                  Password
                </label>
                <div className="input-group mb-2">
                  <input
                    type="password"
                    className="form-control"
                    id="Password1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                <label className="form-check-label" htmlFor="checkbox1">
                  Stay signed in
                </label>
              </div>
              <div className="d-flex justify-content-end bg-light border-top">
                <button onClick={handleSignup} type="button" className="m-4 d-flex btn btn-primary">
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
                </button>
              </div>
            </form>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'Registrationlogin' ? 'show active' : ''}`}
            id="Registrationlogin"
          >
            <form>
              <div className="mb-3">
                <label htmlFor="CNIC2" className="form-label">
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
                <label htmlFor="RollNumber2" className="form-label">
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
                <label htmlFor="Password2" className="form-label">
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
                <label htmlFor="ConfirmPassword" className="form-label">
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
          <div className={`tab-pane fade ${activeTab === 'studentlogin' ? 'show active' : ''}`} id="studentlogin">
            <form>
              <div className="mb-3">
                <label htmlFor="CNIC3" className="form-label">
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
                <label htmlFor="RollNumber3" className="form-label">
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
                <label htmlFor="Password3" className="form-label">
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
                <label className="form-check-label" htmlFor="checkbox2">
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
        <a href="https://riphahfsd.edu.pk/" target="_blank" className="btn btn-warning text-white" rel="noreferrer">
          visit campus
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
  )
}

export default LoginForms
