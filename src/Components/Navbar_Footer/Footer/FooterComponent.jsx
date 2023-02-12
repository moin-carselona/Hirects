import React from 'react'
const FooterComponent = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='col-4 d-flex flex-column text-primary'>
                <i className="bi bi-briefcase-fill text-primary"></i>
                Job
            </div>
            <div className='col-4 d-flex flex-column'>
                <i className="bi bi-chat-dots-fill"></i>
                Message
            </div>
            <div className='col-4 d-flex flex-column'>
                <i className="bi bi-person-circle"></i>
                Me
            </div>
        </div>
    )
}
export default FooterComponent
