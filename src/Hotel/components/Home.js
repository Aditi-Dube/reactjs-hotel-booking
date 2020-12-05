import React from 'react'
import './Home.css'
// import { FaHome,FaRegistered} from 'react-icons/fa'
// import {FcServices} from 'react-icons/fc'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1"><h4>Fairmont Jaipur</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"White"},{fontStyle:"italic"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"white"},{fontStyle:"italic"}}><h6>Services</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"white"},{fontStyle:"italic"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"white"},{fontStyle:"italic"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:"url(https://www.swantour.com/sites/default/files/City-Palace-Jaipur.jpg)",height:600,backgroundSize:1400}}>     
    <h1 style={{color:"white"}}>Fomont Jaipur Welcomes you for an exiciting stay</h1>
   {/* <img src="https://cdn.pixabay.com/photo/2019/07/23/09/49/hotel-4357159_960_720.jpg" class="" alt="..."  width="1350px" height="800px" />  */}
   
   <div className="card col-md-6 offset-md-3" style={{backgroundColor:"lightsalmon"}}>
                 <div className="card-body">
                    <div className="row">
                        <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}>The land of Maharajas, lakes, grace, emotions, adventure, and vibrancy, Rajasthan with its royal essence welcomes you with all its heart.</h5>
                        </div><br/>
                        <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}> "Khamma Ghani", it says, and has the beauty that never betrays. </h5>
                    
                </div>
            </div>


  </div> 
 </div> 
    )
}

