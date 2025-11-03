import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
   <footer className='Footersec'>
    <div className="fir-row">
      <h1>Contact Us</h1>
      <ul>
        <li><a href=""><i class='bxr  bx-location'  ></i> Location</a></li>
        <li><a href="#"><i class='bxr  bx-phone'  ></i>  +91 12345 6987</a></li>
        <li><a href="#"><i class='bxr  bx-envelope'  ></i>  FoodEatapp@gmail.com </a></li>
      </ul>
      
    </div>
    <div className="sec-row">
      <h1>Feane</h1>
      <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
      <div className="logos">
        <i class='bxr  bx-happy-beaming'  ></i> 
        <i class='bxr  bx-happy-beaming'  ></i> 
        <i class='bxr  bx-happy-beaming'  ></i> 
        <i class='bxr  bx-happy-beaming'  ></i> 
      </div>

     
    </div>
     <div className="third-row">
        <h1>Opening Hours</h1>
        <p>Everyday</p>
        <p>10.00 Am -10.00 Pm</p>
      </div>
   </footer>
   <div className='footer-last'>
      <p>© 2025 All Rights Reserved By Free Html Templates</p>
      <p>© Distributed By ThemeWagon</p>
   </div>
   </>
  )
}
