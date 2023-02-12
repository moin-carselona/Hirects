import React, { useState } from 'react'
import Footer from './Components/Navbar_Footer/Footer'
import Navbar from './Components/Navbar_Footer/Navbar'
const Home = () => {
const [currentNottonOpt,setcurrentNottonOpt ] = useState(null)
const currnetBottomOption = (params)=>{
    setcurrentNottonOpt(params)
  }
  return (
    <>
      <div style={{width:"98"}}>
        <Navbar></Navbar>
      </div>
      <div style={{width:"100%", position:"fixed", bottom:"10px"}}>
        <Footer currnetBottomOption={currnetBottomOption} currentNottonOpt={currentNottonOpt} classes="primary"></Footer>
      </div>
    </>
  )
}
export default Home
