import React, { useState } from 'react'

function TabNav() {
  const [activeTab, setActiveTab] = useState('Alumni')

  return (
    <div className="border m-2">
      <p className="text-white style-color p-2 fs-6 fw-semibold mb-0">
        <i className="bi bi-person-fill mx-1"></i>User Profile
      </p>
      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-underline px-0 px-md-1" id="myTab">
        <li className="nav-item">
          <button
            className={`nav-link text-info-emphasis ${activeTab === 'Alumni' ? 'active' : ''}`}
            onClick={() => setActiveTab('Alumni')}
          >
            <i className="bi bi-mortarboard-fill mx-1"></i>Alumni
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link text-info-emphasis ${activeTab === 'Education' ? 'active' : ''}`}
            onClick={() => setActiveTab('Education')}
          >
            <i className="bi bi-bank2 mx-1"></i>Education
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link text-info-emphasis ${activeTab === 'Profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('Profile')}
          >
            <i className="bi bi-person-fill mx-1"></i>My Profile
          </button>
        </li>
      </ul>
      {/* <!-- Tab panes --> */}
      <div className="tab-content" id="myTabContent">
        <div className={`tab-pane fade show ${activeTab === 'Alumni' ? 'show active' : ''} p-2`} id="Alumni">
          <div className="border p-2 p-md-3 bg-light">
            <div className="primary-font fw-bold fs-4 text-primary-emphasis text-shadow mb-3">
              <i className="bi bi-mortarboard-fill mx-1"></i>
              Welcome to the Alumni Connect Module
            </div>
            <div className="text-muted fs-5 fw-semibold">Dear Students,</div>
            <p className="text-muted mb-2">
              We are excited to introduce a brand new feature in our university portal - the Alumni Connect Module! This
              innovative addition is designed to foster meaningful connections between our current students and the
              esteemed graduates of our university.
            </p>

            <p className="text-muted mb-2">
              Alumni Connect is not just a feature; it's a gateway to a world of possibilities. Embrace the chance to
              connect, learn, and grow with the support of our incredible alumni community. Your journey doesn't end
              with graduation; it's just the beginning of a lifelong connection to a network that will enrich your
              academic and professional life.
            </p>
            <p className="text-muted fw-semibold">
              Explore the Alumni Connect Module today and unlock a universe of opportunities!!!
            </p>
            {/* <!-- Explore button --> */}
            <a href="List-of-graduated.html" className="styled-btn mx-0 mx-md-2" type="button">
              <div className="strong">Explore</div>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </a>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'Education' ? 'show active' : ''} p-2`} id="Education">
          <div className="border p-2" style={{ overflowX: 'auto' }}>
            <table className="table table-hover  table-bordered table-responsive">
              <thead>
                <tr>
                  <th scope="col">Degree</th>
                  <th scope="col">Institute</th>
                  <th scope="col">Total Marks</th>
                  <th scope="col">Obtained Marks</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Status</th>
                  <th scope="col">Board</th>
                  <th scope="col">% percentage</th>
                  <th scope="col">Major Subjects</th>
                  <th scope="col">Degree Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matric/O-Level</td>
                  <td>fsd</td>
                  <td>1100</td>
                  <td>943</td>
                  <td>19278</td>
                  <td>Completed</td>
                  <td>fsd</td>
                  <td>85.7272727272727</td>
                  <td>Computer,Physics,Chemistry,Maths</td>
                  <td>2018</td>
                </tr>
                <tr>
                  <td>Intermediate/A-Level</td>
                  <td>punjab college</td>
                  <td>1100</td>
                  <td>697</td>
                  <td>19278</td>
                  <td>Completed</td>
                  <td>punjab college</td>
                  <td>63.3636363636364</td>
                  <td>physics,computer,maths</td>
                  <td>2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'Profile' ? 'show active' : ''} p-2`} id="Profile">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Account ID:</strong>111744
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Reg Date:</strong>11/8/2020 10:42:37 AM
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Email:</strong>waizshaban215gmail.com
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Home Phone:</strong>+92 (32) 3965940
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Mobile:</strong>+92 (305) 7293362
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Gender:</strong>Male
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Zip Postal:</strong>38000
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Address:</strong>486-B Street No 17 Nazimabad Faisalabad
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Date of Birth:</strong>7/9/2002 11:28:32 PM
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>First Name:</strong>MUHAMMAD WAIZ
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Last Name:</strong>SHABAN GULL
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Religion:</strong>Islam
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Marital Status:</strong>Single
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Nationality:</strong>Pakistan
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Domicile City:</strong>Faisalabad
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Mother Tongue:</strong>Urdu
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Roll No:</strong>19278
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Registration No:</strong>F20A14U20186
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Enrolled In:</strong>Fall 2020
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Current Semester:</strong>7
                </li>
                <li className="list-group-item border-0 p-0 text-muted">
                  <strong>Blood:</strong>B-
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Emergency Contact Name:</strong>Shaban Gull
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Emergency Contact No:</strong>+92 (300) 7617173
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>District:</strong>Faisalabad
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Disability:</strong>False
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Is Criminal:</strong>False
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>CNIC:</strong>33100-6151961-7
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Is Hafiz:</strong>False
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Is Admission Confirm:</strong>True
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Section Name:</strong>C
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Active From Account:</strong>True
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Account Verify:</strong>False
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Dsa Verify:</strong>True
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Country Name:</strong>Pakistan
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Dept Name:</strong>Computing
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>City Name:</strong>Faisalabad
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Tehsil Name:</strong>Faisalabad city
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>College Name:</strong>Riphah College
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Province:</strong>Punjab
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Degree Name:</strong>BS Computer Science
                </li>
                <li className="list-group-item border-0 p-0 text-muted">
                  <strong>Year Of Passing:</strong>2020
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Degree Program Certificate Title:</strong>ICS
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Institute Name:</strong>Punjab College
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Institute Catagory:</strong>Private
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Institute Country:</strong>Pakistan
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Exam Institute:</strong>Government College Ghulam Muhammad Fsd
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Exam Institute Country:</strong>1
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>CGPA/Obtained Marks:</strong>697
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Total CGPA/Total Marks:</strong>1100
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Awarded Grade:</strong>B
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Total Cr Hours:</strong>0
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Transcript No:</strong>Nill
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Result Declaration Date:</strong>9/22/2020 11:28:32 PM
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Degree OR Certificate No:</strong>590571-IFR-2018
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Degree OR Certificate Date:</strong>9/29/2020 11:28:32 PM
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Discipline OR Subject:</strong>Nill
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Sub Discipline OR Subject:</strong>Nill
                </li>
                <li className="list-group-item border-0 p-0 mb-2 text-muted">
                  <strong>Project Research Title:</strong>Nill
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabNav
