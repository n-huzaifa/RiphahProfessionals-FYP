import React from 'react'
import Registration from './Registration'
import Login from './Login'

function LoginForms({ activeTab, handleTabChange }) {
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
              <i className="bi bi-mortarboard-fill mx-1"></i>Login
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
        </ul>
        {/* Tab panes */}
        <div className="tab-content" id="myTabContent">
          <Login activeTab={activeTab} />
          <Registration activeTab={activeTab} />
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
