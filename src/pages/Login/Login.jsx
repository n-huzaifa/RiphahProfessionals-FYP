import React, { useState } from 'react'
import { signInWithEmailAndPassword } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Login({ activeTab }) {
  const [cnic, setCNIC] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = getAuth()

  const navigate = useNavigate()
  async function handleSignIn(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, `${cnic}@${rollNumber}.com`, password)
      .then((user) => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
  }
  return (
    <div className={`tab-pane fade show ${activeTab === 'Graduatelogin' ? 'active' : ''}`} id="Graduatelogin">
      <form>
        <div className="mb-3">
          <label htmlFor="CNIC1" className="form-label">
            CNIC
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="CNIC1"
              value={cnic}
              maxLength={13} // Added maxLength to restrict input length
              placeholder="XXXXXXXXXXXXX"
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
              type="text"
              className="form-control"
              id="RollNumber1"
              value={rollNumber}
              maxLength={6}
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
        {error && <div className="text-danger text-center">{error}</div>}
        <div className="d-flex justify-content-end bg-light border-top">
          <button onClick={handleSignIn} type="button" className="m-4 d-flex btn btn-primary">
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
  )
}

export default Login
