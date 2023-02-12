import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KTCardBody } from './Components/Constant/KTCardBody'
import StatusOnlineOffline from './Components/Constant/StatusOnlineOffline'
import Jobs from './Components/Jobs/Jobs'
import Me from './Components/Jobs/Me'
import Messages from './Components/Jobs/Messages'
import Footer from './Components/Navbar_Footer/Footer'
import Navbar from './Components/Navbar_Footer/Navbar'
import ChatttedNavbar from './Components/Navbar_Footer/Navbar/ChatttedNavbar'
import "./Home.css"
const Home = () => {
  const [currentNottonOpt, setcurrentNottonOpt] = useState(null)
  const [internetStatus, setinternetStatus] = useState("")
  const Botto_Option_Selected = useSelector((store) => store.FooterReducer.Botto_Option)
  const dispatch = useDispatch()
  const currnetBottomOption = (params) => {
    setcurrentNottonOpt(params)
    dispatch({ type: "BOTTOM_OPTION_STATUS", payload: params })
  }
  window.addEventListener('load', function (event) {
    detectInternet();
  });
  window.addEventListener('online', function (event) {
    detectInternet();
  });
  window.addEventListener('offline', function (event) {
    detectInternet();
  });
  function detectInternet() {
    if (navigator.onLine) {
      setinternetStatus("online")
    } else {
      setinternetStatus("offline")
    }
  }
  return (
    <div className="d-flex flex-column">
      {
        internetStatus === "offline" &&
        <div className='text-center centers' >
          {/* <KTCardBody className='card py-4'> */}
          <StatusOnlineOffline Title="your internet is disconneted" />
          {/* </KTCardBody> */}
        </div>
      }
      {
        internetStatus === "online" &&
        < >
          {/* Job Container +++++++++++++++++++++++++++++ */}
          {
            Botto_Option_Selected === "job" ?
              <div className='bg-white mb-4' style={{ width: "100%", height: "50px", position: "fixed" }}>
                <Navbar></Navbar>
              </div>
              :
              Botto_Option_Selected === "message" ?
                <div className='bg-white ' style={{ width: "100%", height: "50px", position: "fixed" }}>
                  <ChatttedNavbar></ChatttedNavbar>
                </div>
                :
                Botto_Option_Selected === "me" ?
                  <>
                    <div className='bg-white ' style={{ width: "100%", height: "50px", position: "fixed" }}>
                      <Navbar></Navbar>
                    </div>
                  </>
                  :
                  <></>
          }
          {/* Job Container +++++++++++++++++++++++++++++ */}
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          {/* body is here now  Container +++++++++++++++++++++++++++++ */}
          <div style={{ width: "100%", overflow: "auto", overflowY: "hidden", scrollBehavior: 'smooth' }} className="p-2 pt-3  container-fluid p-0 example mt-5">
            {
              Botto_Option_Selected === "job" ?
                <Jobs></Jobs>
                :
                Botto_Option_Selected === "message" ?
                  <>
                    <Messages></Messages>
                  </>
                  :
                  Botto_Option_Selected === "me" ?
                    <>
                      <Me></Me>
                    </>
                    :
                    <></>
            }
          </div>
          {/* body is here now  Container +++++++++++++++++++++++++++++ */}
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          {/* footer +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div style={{ width: "100%", position: "fixed", bottom: "0px", height: "60px" }} className="bg-white">
            <Footer currnetBottomOption={currnetBottomOption} currentNottonOpt={currentNottonOpt} classes="primary"></Footer>
          </div>
          {/* footer +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        </>
      }
    </div>
  )
}
export default Home
