import React, { useState } from 'react'
import NavJobData from "../../../Json/NavJobData.json"
import "./Nav.css"
import { v4 as uuid } from 'uuid';
const ChatttedNavbar = () => {
  const [currentTopic, setCurrentTopic] = useState(null)
  const CheckCurrentTopicSelected = (index) => {
    setCurrentTopic(index)
  }
  return (
    <div className='d-flex justify-content-start align-items-center ' style={{ width: "99%", height: "50px" }}  >
    <p className='ms-4 text-primary'>Chat</p>
    <p className='ms-2'>Interaction</p>
    </div>
  )
}
export default ChatttedNavbar
