import React from 'react'

function SkillsModal() {
  return (
    <div className="modal fade" id="Modal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header align-items-center">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <i className="bi bi-bookmark-heart mx-1"></i>Select the level of your skills
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* <!-- <div className="fw-semibold text-center mb-3">Select the level of your skill</div> --> */}
            <div className="mb-1">
              <div className="text-secondary fs-6 fw-semibold">Graphic designing</div>
              <div className="d-flex  align-items-center">
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Beginner
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Intermediate
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked={true}
                    name="flexRadioDefault1"
                    id="flexRadioDefault3"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Advanced
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div className="text-secondary fs-6 fw-semibold">Web development</div>
              <div className="d-flex align-items-center">
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    defaultChecked={true}
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault4"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault4">
                    Beginner
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault5" />
                  <label className="form-check-label" htmlFor="flexRadioDefault5">
                    Intermediate
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault6" />
                  <label className="form-check-label" htmlFor="flexRadioDefault6">
                    Advanced
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div className="text-secondary fs-6 fw-semibold">SEO Expert</div>
              <div className="d-flex align-items-center">
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault7" />
                  <label className="form-check-label" htmlFor="flexRadioDefault7">
                    Beginner
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    defaultChecked={true}
                    type="radio"
                    name="flexRadioDefault3"
                    id="flexRadioDefault8"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault8">
                    Intermediate
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault9" />
                  <label className="form-check-label" htmlFor="flexRadioDefault9">
                    Advanced
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div className="text-secondary fs-6 fw-semibold">App development</div>
              <div className="d-flex align-items-center">
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault10" />
                  <label className="form-check-label" htmlFor="flexRadioDefault10">
                    Beginner
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault11" />
                  <label className="form-check-label" htmlFor="flexRadioDefault11">
                    Intermediate
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    defaultChecked={true}
                    type="radio"
                    name="flexRadioDefault4"
                    id="flexRadioDefault12"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault12">
                    Advanced
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="text-secondary fs-6 fw-semibold">Affiliate Marketing</div>
              <div className="d-flex align-items-center">
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    defaultChecked={true}
                    type="radio"
                    name="flexRadioDefault5"
                    id="flexRadioDefault13"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault13">
                    Beginner
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault14" />
                  <label className="form-check-label" htmlFor="flexRadioDefault14">
                    Intermediate
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault15" />
                  <label className="form-check-label" htmlFor="flexRadioDefault15">
                    Advanced
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-outline-info" data-bs-dismiss="modal">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsModal
