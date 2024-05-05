import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, createUserWithEmailAndPassword, doc, firestore, setDoc } from '../../firebase'

function Registration({ activeTab }) {
  const [formData, setFormData] = useState({
    CNIC: '',
    RollNumber: '',
    Password: '',
    ConfirmPassword: '',
  })

  const navigate = useNavigate()

  const [passwordError, setPasswordError] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      if (formData.Password !== formData.ConfirmPassword) {
        setPasswordError('Passwords do not match')
        return
      }

      if (formData.CNIC.length < 13 || !/^\d+$/.test(formData.CNIC)) {
        setPasswordError('CNIC is incorrect')
        return
      }

      if (formData.RollNumber.length < 6 || !/^\d+$/.test(formData.RollNumber)) {
        setPasswordError('Roll Number is incorrect')
        return
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        `${formData.CNIC}@${formData.RollNumber}.com`,
        formData.Password
      )
      const user = userCredential.user
      setPasswordError('')

      await setDoc(doc(firestore, 'users', user.uid), {
        cnic: formData.CNIC,
        rollNo: formData.RollNumber,
      })

      console.log('SignUp Successful')
      navigate('/registration')
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return (
    <div className={`tab-pane fade ${activeTab === 'Registrationlogin' ? 'show active' : ''}`} id="Registrationlogin">
      <form>
        <div className="mb-3">
          <label htmlFor="CNIC" className="form-label">
            CNIC
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="CNIC"
              value={formData.CNIC}
              onChange={handleInputChange}
              placeholder="XXXXXXXXXXXXX"
              maxLength={13} // Added maxLength to restrict input length
            />

            <span className="input-group-text" id="addon-wrapping">
              <i className="bi bi-person-fill mx-1"></i>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="RollNumber" className="form-label">
            Roll Number
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="RollNumber"
              maxLength={6}
              value={formData.RollNumber}
              onChange={handleInputChange}
            />
            <span className="input-group-text" id="addon-wrapping">
              <i className="bi bi-person-fill mx-1"></i>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <div className="input-group mb-2">
            <input
              type="password"
              className="form-control"
              id="Password"
              value={formData.Password}
              onChange={handleInputChange}
            />
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
            <input
              type="password"
              className="form-control"
              id="ConfirmPassword"
              value={formData.ConfirmPassword}
              onChange={handleInputChange}
            />
            <span className="input-group-text" id="addon-wrapping">
              <i className="bi bi-person-fill-lock"></i>
            </span>
          </div>
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <div className="d-flex justify-content-end bg-light border-top">
          <button className="m-4 style-btn" onClick={handleSignup}>
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
  )
}

export default Registration
