import React from 'react'

function BreadCrumbs() {
  return (
    <nav aria-label="breadcrumb" className="d-none d-md-inline">
      <ol className="breadcrumb text-info mb-0 align-items-center border d-flex justify-content-center rounded-0 border-bottom">
        <li className="breadcrumb-item">
          <div className="btn btn-secondary px-2 py-1 rounded-1" onClick={() => window.location.reload()}>
            <i className="bi bi-arrow-repeat"></i>
          </div>
        </li>
        <li className="breadcrumb-item">Riphah College Of Computing </li>
        <li className="breadcrumb-item">Department of Computing </li>
        <li className="breadcrumb-item">You are Logged in As: Student </li>
        <li className="breadcrumb-item">Welcome! MUHAMMAD WAIZ (19278) </li>
        <li className="breadcrumb-item">
          <a href="index.html" className="text-danger">
            Signout
          </a>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumbs
