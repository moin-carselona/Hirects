import React from 'react'
const IsLoading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className='spinner-border mr-15' role='status'></div>
            <h4 className='fw-bold'>Loading...</h4>
        </div>
    )
}
export default IsLoading
