import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Header from './Header'
import { auth, doc, firestore, setDoc } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Info() {
  return (
    <>
      {/* <!-- Congratulations Text  --> */}
      <p>
        <strong>Congratulations</strong> on reaching this significant milestone in your academic journey! Your hard
        work, dedication, and perseverance have led you to successfully complete your degree at
        <strong> Riphah International University</strong>.
      </p>
      {/* <!-- Congratulations Text  --> */}
      <p>
        As you embark on new adventures and opportunities, we would greatly appreciate your valuable feedback about your
        experience at our university. Your insights will be instrumental in guiding prospective students who are
        considering joining our university community. By sharing your thoughts, you'll be contributing to the growth and
        enhancement of our academic environment.
      </p>
      {/* <!-- Ask students to give review and details that helps the new student --> */}
      <p className="border-bottom pb-3">
        Please take a moment to provide your feedback through our online survey, sharing your experiences, challenges,
        and the aspects of <strong>Riphah International University</strong> that made your journey memorable. Your input
        will not only help us improve but also assist future students in making informed decisions about their
        educational pursuits.
      </p>
    </>
  )
}

function Registration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    gender: 'Male',
    skills: 'Web development',
    department: 'Computer Science',
    session: '',
    location: '',
    job: '',
    review: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Get current user
    const user = auth.currentUser
    // Check if user is logged in
    if (user) {
      try {
        // Set document data in Firestore
        await setDoc(
          doc(firestore, 'users', user.uid),
          {
            ...formData,
          },
          { merge: true }
        )

        console.log('Form data submitted successfully!')
        // Optionally, reset the form after submission
        setFormData({
          name: '',
          number: '',
          email: '',
          gender: 'Female',
          skills: 'Web development',
          department: 'Computer Science',
          session: '',
          location: '',
          job: '',
          review: '',
        })
        navigate('/profile')
      } catch (error) {
        console.error('Error submitting form data:', error)
      }
    } else {
      console.error('User is not logged in.')
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      {/* <!-- Navbar --> */}
      <Header />
      {/* <!-- Main Section --> */}
      <section>
        <h1 className="primary-font fw-bold p-3 text-center text-shadow">
          <i className="bi bi-mortarboard-fill mx-1">Dear Riphah International University Graduates</i>
        </h1>
        <div className="p-3 p-md-5 text-muted border m-2 m-md-5">
          <Info />
          {/* <!-- Ilumni Infomation Form --> */}
          <form className="mt-5" onSubmit={handleSubmit}>
            <legend>
              <h2>PERSONAL DETAILS</h2>
            </legend>
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-person-fill mx-1"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="number" className="form-label fw-semibold">
                Contact Number
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Rest of the fields */}
            {/* Ensure all fields have similar structure */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="email" className="form-label fw-semibold">
                E-mail
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4 d-flex" data-aos="zoom-in">
              <div className="text-muted fw-semibold">Gender:</div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="flexRadioDefault1"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="flexRadioDefault2"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="Skills" className="form-label fw-semibold">
                Skills
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-gear-fill"></i>
                </span>
                <select
                  className="form-select"
                  id="Skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                >
                  <option value="Web development">Web development</option>
                  <option value="Machine learning">Machine learning</option>
                  {/* Rest of the options */}
                </select>
              </div>
              <div className="form-text">You can select the multiple skills.</div>
            </div>
            {/* Rest of the fields */}
            <div className="input-group mb-4" data-aos="zoom-in">
              <label className="input-group-text fw-semibold text-muted" htmlFor="inputGroupSelect01">
                Department
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Social Sciences">Social Sciences</option>
                {/* Rest of the options */}
              </select>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="session" className="form-label fw-semibold">
                Session
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-calendar-minus-fill"></i>
                </span>
                <input
                  type="date"
                  className="form-control"
                  id="session"
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                />
              </div>
              <div className="form-text">
                <i className="bi bi-mortarboard-fill mx-1"></i>Select the year of your Graduation
              </div>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="Location" className="form-label fw-semibold">
                Location of your working place
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="job" className="form-label fw-semibold">
                Designation
              </label>
              <div className="input-group">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="bi bi-person-fill-gear"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                />
              </div>
              <div className="form-text">Explain the role of your job in minimum words.</div>
            </div>
            {/* Rest of the fields */}
            <div className="mb-4" data-aos="zoom-in">
              <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">
                Review About University
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                name="review"
                value={formData.review}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* Button */}
            <div className="d-flex justify-content-start mt-5">
              <button type="submit" className="style-btn" data-toggle="modal" data-target="#exampleModal">
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
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer
        className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis text-shadow"
        id="copyright"
      >
        © 2024 All rights reserved By Riphah International University Computer Science Department
      </footer>
    </>
  )
}

export default Registration
