import React from 'react'

function SideNav() {
  return (
    <div className="list-group rounded-0">
      <div className="text-white style-color p-3">Welcome To Riphah FSD</div>
      <a href="./profile" className="list-group-item p-2 text-info">
        <i className="bi bi-person-check-fill mx-2"></i>My Profile
      </a>
      <a href="./profile" className="list-group-item p-2 text-danger">
        <i className="bi bi-rocket-takeoff-fill mx-2"></i>My Results
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-flower2 mx-2"></i>New Enrollment
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-flower1 mx-2"></i>All Enrollments
      </a>
      <a href="./profile" className="list-group-item p-2 text-info">
        <i className="bi bi-clock-fill mx-2"></i>My Timetable
      </a>
      <a href="./login?id=attendance" className="list-group-item p-2 text-info">
        <i className="bi bi-tencent-qq mx-2"></i>Attendance
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-person-raised-hand mx-2"></i>My Teachers
      </a>
      <a href="./profile" className="list-group-item p-2 text-danger">
        <i className="bi bi-calendar2-range-fill mx-2"></i>Date Sheet
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-cloud-fog2-fill mx-2"></i>QEC Evaluation
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-cloud-fog2-fill mx-2"></i>DSA Evaluation
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-clipboard2-data-fill mx-2"></i>Roll No Slip
      </a>
      <a href="./profile" className="list-group-item p-2 text-danger">
        <i className="bi bi-brush-fill mx-2"></i>Assignments
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-book-half mx-2"></i>Quizes
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-people-fill mx-2"></i>Memberships
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-eye-fill mx-2"></i>Visits
      </a>
      <a href="./profile" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-envelope-open-fill mx-2"></i>Message Board
      </a>
      <a href="List-of-graduated.html" className="list-group-item p-2 text-info-emphasis">
        <i className="bi bi-mortarboard-fill mx-2"></i>Alumni
      </a>
      <a href="./profile" className="list-group-item p-2 text-info">
        <i className="bi bi-gear-fill mx-2"></i>Settings
      </a>
    </div>
  )
}

export default SideNav
