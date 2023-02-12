import React from 'react'
const Footer = ({currnetBottomOption, currentNottonOpt, classes}) => {
  
  return (
      <div className='d-flex justify-content-between align-items-center'>
            <div className={`col-4 d-flex flex-column fs-7  text-${currentNottonOpt === "job"  || currentNottonOpt === null ? classes : "dark"}`} onClick={()=>currnetBottomOption("job")}>
                <i className="  bi bi-briefcase-fill  "  ></i>
                Job
            </div>
            <div className={`col-4 d-flex flex-column text-${currentNottonOpt ==="message" ? classes : "dark"}`} onClick={()=>currnetBottomOption("message")}>
                <i className="  bi bi-chat-dots-fill"></i>
                Message
            </div>
            <div className={`col-4 d-flex flex-column text-${currentNottonOpt ==="me" ? classes : "dark"}`} onClick={()=>currnetBottomOption("me")}>
                <i className="  bi bi-person-circle"></i>
                Me
            </div>
        </div>
  )
}
export default Footer
