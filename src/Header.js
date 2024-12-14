import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
      <div className='mp'>
   {/* <b> <center>BURGER KINGS</center></b> */}
  
   </div> 
       <header>
        {/* <nav class="navbar fixed-top">
            
            <div class="logo left-logo">
                <img src="left-logo.png" alt="Left Logo"/>
            </div>
             
            
            <div class="logo center-logo">
                <img src="center-logo.png" alt="Center Logo"/>
            </div> */}

            
            {/* <ul class="nav-menu right-menu">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link tot="#">Services</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </nav> */}
    {/* </header> */}
       
      <div className='mp'>
   {/* <b> <center>BURGER KINGS</center></b> */}
  
   </div> 

   
      
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark hcl">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><h3>Burger Kings</h3><span className='asd'></span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">Menu</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/Hooks">OFFER</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/slick">slick</Link> */}
        </li>
        
     
      </ul>
      
    </div>
    
  </div>
</nav>
</header>




   
 <div className='qo'>
      {/* <video controls> */}
        {/* <source src="video/1.mp4"></source> */}
      {/* </video> */}

      </div>
      </div>
    


        
    
    )  
    
  }
}





