import React, { useState } from 'react'
import NavJobData from "../../../Json/NavJobData.json"
import "./Nav.css"
import { v4 as uuid } from 'uuid';
import { Modal } from 'react-bootstrap'
import JobSearch from './JobSearch';
import JobPrefernce from './JobPrefernce';
const JobNavbar = () => {
  const [currentTopic, setCurrentTopic] = useState(null)
  const [currentComponents, setCurrentComponents] = useState(null)
  const [toggleModal, settoggleModal] = useState(false)
  const CheckCurrentTopicSelected = (index) => {
    setCurrentTopic(index)
  }
  const ToggleMenu = (menu) => {
    setCurrentComponents(menu)
    settoggleModal(true)
  }
  const closeModel = (menu) => {
    settoggleModal(false)
  }
  return (
    < >
      <div className="d-flex  p-3 example " style={{ overflow: "auto", overflowY: "hidden", scrollBehavior: 'smooth' }} >
        {
          NavJobData?.map((jobnavElement, index) => {
            return (
              <div className={`badge text-${currentTopic == index  || currentTopic == null && index == 0 ? "primary" : "black"}  me-lg-1 mb-1 text-${currentTopic == index  || currentTopic == null && index == 0 ? "fw-bolder fs-6" : "muted"}`} key={uuid()} onClick={() => CheckCurrentTopicSelected(index)} style={{ cursor: 'pointer' }} >
                {jobnavElement}
              </div>
            )
          })
        }
      </div>
      <div className="d-flex  p-1 w-25 d-flex align-items-center justify-content-center ">
        <span className='p-2'><i className="bi bi-plus fs-5 text-primary" onClick={() => ToggleMenu("JobPrefernce")}></i></span>
        <span> <i className="bi bi-search mt-2 text-primary" onClick={() => ToggleMenu("JobSearch")}></i></span>
      </div>
      <Models show={toggleModal} handleClose={closeModel} currentComponents={currentComponents}> </Models>
    </>
  )
}
export default JobNavbar
function Models({ show, handleClose, currentComponents }) {
  return <div>
    {show ? <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Update P2P</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="d-flex flex-row container ">
          <div className="p-3 d-flex align-items-center  col-12">
            {/* <h3>Assign Time Slot</h3> */}
            {
              <div className=' col-9 mt-2'>
                {currentComponents === "JobSearch" ? <JobSearch  /> : currentComponents === "JobPrefernce" ? <JobPrefernce /> : ""}
              </div>
            }
            <button className="btn btn-primary btn-sm mt-2 col-3">Search</button>
          </div>
        </div>
      </Modal.Body>
    </Modal> : ''}
  </div>
}