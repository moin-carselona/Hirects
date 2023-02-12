import React from 'react'
const JobCard = () => {
    return (
        <div className='border  d-flex flex-column mb-2  ' style={{ height: "185px", width: "100%" }}>
            <div className='d-flex justify-content-between px-2 pb-2'>
                <span className='fs-6 fw-bold text-dark'>React Devloper</span>
                <span className='text-primary fw-bold fs-6 fw-1000'>Rs 10-11 LPA</span>
            </div>
            <div className='d-flex   px-2 pb-2'>
                <span className={`cursor-pointer  text-dark border px-2 pb-1 ms-2 text-muted`} >
                    5-10 Years
                </span>
                <span className={`  cursor-pointer  text-dark border px-2 pb-1 ms-2 text-muted `} >
                    Graduation/Diploma
                </span>
            </div>
            <div className='d-flex  justify-content-start px-2 pb-1 '>
                <span className={`text-black`} >
                    Self Funding
                </span>
                <span className={`text-black fw-bold ms-2 `} >
                    .
                </span>
                <span className={`  text-black ms-2`} >
                    100-200 Employee
                </span>
            </div>
            <div className='d-flex  justify-content-end px-2 pb-1 '>
                <span className={`  text-black ms-2 border px-1 `} >
                    <i className="bi bi-house text-primary"></i>
                    <span className='ms-1 text-primary'>Remote</span>
                </span>
            </div>
            <div className='d-flex  justify-content-between px-2 pb-1 '>
                <span className={`text-black`} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5AE5yMHOucc_s8wte_rzX5bbZTxEPAWaS_KbHU8nfg&s" alt="" style={{ width: "20px", borderRadius: "50%" }} />
                    <span className='ms-1'> Md Moin</span>
                </span>
                <span className={`  text-black ms-2`} >
                    Sandalpur
                </span>
            </div>
            <div className="  example " style={{ overflow: "auto", overflowY: "hidden", scrollBehavior: 'smooth' }} >
                We are looking for web developer  ..................
            </div>
        </div>
    )
}
export default JobCard
