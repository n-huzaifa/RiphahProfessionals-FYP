import React from 'react'

function Attendance() {
  return (
    <div className="col-12 col-lg-10 p-0">
      <div className="border m-2">
        <p className="text-white style-color p-2 fs-6 fw-semibold mb-0">
          <i className="bi bi-person-fill mx-1"></i>View All Student Attendance
        </p>
        <div className="border-bottom p-2 p-md-3">
          <div className="d-block d-md-flex justify-content-between align-items-center">
            <div className="d-flex mb-2 mb-md-0">
              <div className="mx-1 p-1 btn btn-sm btn-outline-info">Export to Excel</div>
              <div className="mx-1 p-1 btn btn-sm btn-outline-info">Export to PDF</div>
              <div className="mx-1 p-1 btn btn-sm btn-outline-info">Print</div>
              <div className="mx-1 p-1 btn btn-sm btn-outline-info">Set Filter</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="mx-1">
                <small>Form Submitted?</small>
              </div>
              <div className="mx-1">
                <div className="toggler">
                  <input id="toggler-1" name="toggler-1" type="checkbox" value="1" defaultChecked />
                  <label htmlFor="toggler-1">
                    <svg
                      className="toggler-on"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                    </svg>
                    <svg
                      className="toggler-off"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                      <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="mx-1">
                <small>Open Inline</small>
              </div>
              <div className="mx-1">
                <div className="toggler">
                  <input id="toggler-2" name="toggler-2" type="checkbox" value="1" />
                  <label htmlFor="toggler-2">
                    <svg
                      className="toggler-on"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                    </svg>
                    <svg
                      className="toggler-off"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                      <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-warning-subtle border border-warning mb-2 d-block d-md-flex justify-content-around p-3 fw-semibold text-warning-emphasis">
            <div className="">Roll No: 19278</div>
            <div className="">Degree: BS Computer Science</div>
            <div className="">Name: MUHAMMAD WAIZ</div>
          </div>
          <table className="table table-hover table-bordered table-responsive mb-3">
            <thead>
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Student Name</th>
                <th scope="col">Course Name</th>
                <th scope="col">Teacher Name</th>
                <th scope="col">Cr. Hrs</th>
                <th scope="col">Lectures</th>
                <th scope="col">Presents</th>
                <th scope="col">Absents</th>
                <th scope="col">leaves</th>
                <th scope="col">Percent</th>
                <th scope="col">Fine</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MUHAMMAD WAIZ</td>
                <td>Information Security</td>
                <td>Ghulam Mustafa</td>
                <td>3(3-0)</td>
                <td>30</td>
                <td>28</td>
                <td>2</td>
                <td>5</td>
                <td>93</td>
                <td>0</td>
                <td>Eligible</td>
              </tr>
              <tr>
                <td>2</td>
                <td>MUHAMMAD WAIZ</td>
                <td>Technical & Business Writing</td>
                <td>Faiza Javed Dar</td>
                <td>3(3-0)</td>
                <td>29</td>
                <td>27</td>
                <td>2</td>
                <td>8</td>
                <td>93</td>
                <td>0</td>
                <td>Eligible</td>
              </tr>
              <tr>
                <td>3</td>
                <td>MUHAMMAD WAIZ</td>
                <td>Parallel and Distributed Computing</td>
                <td>Noshar Whan Adil</td>
                <td>3(3-0)</td>
                <td>24</td>
                <td>20</td>
                <td>4</td>
                <td>3</td>
                <td>83</td>
                <td>0</td>
                <td>Eligible</td>
              </tr>
              <tr>
                <td>4</td>
                <td>MUHAMMAD WAIZ</td>
                <td>Professional Practices</td>
                <td>Ubaid Ullah</td>
                <td>3(3-0)</td>
                <td>34</td>
                <td>28</td>
                <td>6</td>
                <td>1</td>
                <td>82</td>
                <td>0</td>
                <td>Eligible</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-primary-subtle p-3 text-center text-primary-emphasis fw-semibold border border-primary">
            <i className="bi bi-clock-fill mx-2"></i>if there is any mistake in the Attendance, Please contact with your
            concern department.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance
