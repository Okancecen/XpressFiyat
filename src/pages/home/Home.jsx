import React from 'react'
import Header from "../header/header"
import Search from "../search/Search"
import SideBar from "../body/sidebar/SideBar"
import Context from "../body/context/Context"
import Footer from "../footer/Footer"

function Home() {
  return (<>
  <Header/>
  <Search/>
  <div className="body">
    <SideBar/>
    <Context/>
  </div>
  <div>
  <Footer/>
  </div>
  </>
  )
}

export default Home