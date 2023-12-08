import React from 'react'
import './SideBar.css'  
function SideBar() {
  return (<>
  <div className='sidebar'>
    <div className='sidebar-menu'>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div className='currency'>
      <h1>dolar</h1>
      <h1>EURO</h1>
      <h1>parite</h1>
      <h1>borsa</h1>
    </div>
    <div className='weather'>
      <h2>temperatura: 30°C</h2>
      <h2>7 günlük tahmin: 30°C</h2>
    </div>
    <h1> sorun varsa ulaş</h1>
  </div>
  </>
  )
}

export default SideBar