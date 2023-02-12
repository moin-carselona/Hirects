import React from 'react'
import { Modal } from 'react-bootstrap'
function BootsrapModels({show, handleClose}) {
    return (
        <div>
            {show ? <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update P2P</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-row container">
                        <div className="p-2">
                            <div className="p-3 d-flex align-items-center flex-column col-12">
                                <h3>Assign Time Slot</h3>
                                <select
                                    className='form-select form-select-solid bg-white col-12'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    id="packageId"
                                // onChange={handleChange}
                                // value={timeSlot}
                                >
                                    <option>Select Time Slot</option>
                                    {/* {timeSlotList.timeslotlist?.map((item: any) => {
                                        return <option value={item.id}
                                            key={item.id}>{item.name}</option>
                                    })} */}
                                </select>
                                {/* <button className="btn btn-warning btn-sm mt-2" onClick={handleChangetimeslot}>Change</button> */}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> : ''}
        </div>
    )
}
export default BootsrapModels
