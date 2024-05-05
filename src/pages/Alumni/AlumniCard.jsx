import React from 'react'

function AlumniCard({ user }) {
  return (
    <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in">
      <div className="mb-3 mb-md-5 card border-info bg-light">
        <img src="images/Male.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title fw-semibold primary-font">{user?.name}</h3>
          <div>
            <p className="mb-2">
              <strong>
                <i className="bi bi-rocket-takeoff-fill mx-1"></i>Department :{' '}
              </strong>
              {user?.department}
            </p>
            <p className="mb-2">
              <strong>
                <i className="bi bi-geo-alt-fill mx-1"></i>Located At :{' '}
              </strong>
              {user?.location}
            </p>
            <p className="mb-4">
              <strong>
                <i className="bi bi-person-fill-gear mx-1"></i>Designation :{' '}
              </strong>
              {user?.job}
            </p>
          </div>
          <a href="Waiz-profile.html" className="btn btn-outline-info">
            Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default AlumniCard
