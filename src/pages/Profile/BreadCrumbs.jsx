import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

function BreadCrumbs({ userData }) {
  async function handleSignOut(e) {
    try {
      e.preventDefault()
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

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
        <li className="breadcrumb-item">
          Welcome! {userData?.name} ({userData?.rollNo}){' '}
        </li>
        <li className="breadcrumb-item">
          <button onClick={handleSignOut} className="text-danger border-0 bg-transparent">
            Signout
          </button>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumbs
