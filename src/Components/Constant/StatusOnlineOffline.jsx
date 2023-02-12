import React from 'react'
import { Modal } from 'react-bootstrap'
const StatusOnlineOffline = ({ show,closeBtn, Title, color }) => {
    return (
        <div className='bg-primary'>
            {show ? <Modal show={show} onHide={closeBtn}>
                <Modal.Header >
                    <Modal.Title>
                        <div className={`card bg-${color} px-2 text-white fs-8 text-center`}> <div className='spinner-borde' role="status"></div> {Title}</div>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
                : ''
            }
        </div>
    )
}
export default StatusOnlineOffline
