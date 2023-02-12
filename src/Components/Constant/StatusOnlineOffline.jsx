import React from 'react'

const StatusOnlineOffline = ( {Title, color}) => {
    return (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className={`fw-bold bg-${color} text-${color === "danger" ? "white" : "black"} w-100`}>{Title}</div>
        </div>
    )
}

export default StatusOnlineOffline
