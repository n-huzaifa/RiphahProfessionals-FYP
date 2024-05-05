import React from 'react'

function BasicInfo({ userData }) {
  return (
    <div className="col-12 col-md-4 col-lg-2 p-0">
      <div className="border m-2">
        <p className="text-white style-color p-2 fs-6 fw-semibold">BASIC INFORMATION</p>
        <div className="m-2 border p-2">
          {userData?.gender === 'Male' ? (
            <img src="images/Male.jpg" className="card-img-top" alt="..." />
          ) : (
            <img src="images/Female.jpg" className="card-img-top" alt="..." />
          )}
        </div>
        <div className="border bg-light m-2 p-3 fw-semibold text-info-emphasis">{userData?.name}</div>
      </div>
      <div className="border m-2">
        <p className="text-white style-color p-2 fs-6 mb-0 fw-semibold">Contact</p>
        <small className="d-block border-bottom text-info-emphasis py-2 px-1 fw-semibold">
          <i className="bi bi-envelope-fill mx-1"></i>
          {userData?.email}
        </small>
        <small className="d-block border-bottom text-info-emphasis py-2 px-1 fw-semibold">
          <i className="bi bi-phone-fill mx-1"></i>
          {userData?.number}
        </small>
        <small className="d-block text-info-emphasis py-2 px-1 fw-semibold">
          <i className="bi bi-telephone-fill mx-1"></i>041-8777210
        </small>
      </div>
      <div className="border m-2">
        <div className="text-white style-color p-2 fs-6 fw-semibold d-flex justify-content-between">
          <div>
            <i className="bi bi-gear-fill mx-1"></i>Skills
          </div>
          <div className="btn text-white p-0" data-bs-toggle="modal" data-bs-target="#Modal4">
            <i className="bi bi-pencil-square"></i>
          </div>
        </div>
        <div className="p-2">
          <p className="text-secondary mb-0 fs-6 fw-semibold">Graphic designing</p>
          <div className="progress mb-2 rounded-0" style={{ height: '10px' }}>
            <div
              data-aos="fade-right"
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: '100%', height: '10px' }}
            ></div>
          </div>
          <p className="text-secondary mb-0 fs-6 fw-semibold">Web development</p>
          <div className="progress mb-2 rounded-0" style={{ height: '10px' }}>
            <div
              data-aos="fade-right"
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: '25%', height: '10px' }}
            ></div>
          </div>
          <p className="text-secondary mb-0 fs-6 fw-semibold">SEO Expert</p>
          <div className="progress mb-2 rounded-0" style={{ height: '10px' }}>
            <div
              data-aos="fade-right"
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: '60%', height: '10px' }}
            ></div>
          </div>
          <p className="text-secondary mb-0 fs-6 fw-semibold">App development</p>
          <div className="progress mb-2 rounded-0" style={{ height: '10px' }}>
            <div
              data-aos="fade-right"
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: '100%', height: '10px' }}
            ></div>
          </div>
          <p className="text-secondary mb-0 fs-6 fw-semibold">Affiliate Marketing</p>
          <div className="progress mb-2 rounded-0" style={{ height: '10px' }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: '25%', height: '10px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
