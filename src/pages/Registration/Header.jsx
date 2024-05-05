import React from 'react'

function Header() {
  return (
    <header id="Header" className="px-2 px-md-4 py-2 border-bottom" data-aos="fade-down">
      <div className="d-flex justify-content-between align-items-center">
        {/* <!-- Logo --> */}
        <div>
          <img src="images/RipLogo.png" className="w-100" alt="" />
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
          <div className="text-success sm-txt text-shadow"> Main Satyana Road Faisalabad Near Fish Farm</div>
          <div className="text-success sm-txt text-shadow">Phone: +92 41 8777 210, +92 41 8777 310</div>
        </div>
      </div>
    </header>
  )
}

export default Header
