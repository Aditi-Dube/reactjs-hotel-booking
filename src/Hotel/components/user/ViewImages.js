import React from 'react';
import { Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './ViewImages.css';


export default function ViewImages() {
    return (
        <div>
          <nav className="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span className="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item5 active">
                        <Link className="nav-link" to="/viewImages" style={{fontStyle:"italic"}}>Our Rooms</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item6 active">
                        <Link className="nav-link" to="/getvaccantroom" style={{fontStyle:"italic"}}>Book Now</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item7 active">
                        <Link className="nav-link" to="/" style={{fontStyle:"italic"}}>Logout</Link>
                    </li>
                </ul> 
            </nav>
            <div style={{backgroundImage:"url(https://www.tourmyindia.com/socialimg/jaipur-tourism-rajasthan.jpg)",height:800,backgroundSize:1400}}>
            
                <br></br>

                {/* <div className="card col-md-6 offset-md-3" style={{backgroundColor:"lightsalmon"}} id="card1">
                <div className="card-header" style={{textAlign:"center"}}>
                    <h5>Luxury Room</h5>
                    </div>
                    <img class="card-img-top" src="https://media.cntraveller.in/wp-content/uploads/2019/09/rohet2.jpg" alt="Card image cap"></img>
                 <div className="card-body">
                    <div className="row">
                        <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}>
                         Book Now For Rs.15000/night
                        </h5>
                        </div><br/>
                </div>
            </div> */}


                {/* 2 */}
                {/* <div className="card col-md-6 offset-md-3" style={{backgroundColor:"lightsalmon"}} id="card1">
                <div className="card-header" style={{textAlign:"center"}}>
                    <h5>Luxury Room</h5>
                    </div>
                    <img class="card-img-top" src="https://media.cntraveller.in/wp-content/uploads/2019/09/rohet2.jpg" alt="Card image cap"></img>
                 <div className="card-body">
                    <div className="row">
                        <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}>
                         Book Now For Rs.15000/night
                        </h5>
                        </div><br/>
                </div>
            </div> */}
{/* Card Side by side */}

<div className="card-deck" >

  <div className="card"  style={{backgroundColor:"papayawhip"}}>
  <div className="card-header" style={{fontStyle:"italic"}}>Luxury Room</div>
  <img class="card-img-top" src="https://media.cntraveller.in/wp-content/uploads/2019/09/rohet2.jpg" alt="Card image cap"></img>
    <div className="card-body" style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-wifi" aria-hidden="true"> </i> </h5>
      <p className="card-text">
          Cost : Rs.6000/night
      </p>
      
    </div>
  </div>

  <div className="card" style={{backgroundColor:"papayawhip"}}>
    <div className="card-header"style={{fontStyle:"italic"}}>Deluxe 1</div>
    <img class="card-img-top" src="https://media.cntraveller.in/wp-content/uploads/2019/09/Rohet5-866x1155.jpg" alt="Card image cap"></img>
    <div className="card-body"  style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-coffee" aria-hidden="true"> </i> </h5>
      <p className="card-text">
      Cost : Rs.3500/night
      </p>
      
    </div>
  </div>

  <div className="card" style={{backgroundColor:"papayawhip"}}>
  <div className="card-header"style={{fontStyle:"italic"}}>Deluxe 2</div>
  <img class="card-img-top" src="https://i.pinimg.com/originals/d2/e8/78/d2e8781e49c6a53882d4fe7d971c8502.jpg" alt="Card image cap"></img>
    <div className="card-body"  style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-ambulance" aria-hidden="true"></i></h5>
      <p className="card-text">
Cost : Rs.4500/night
      </p>
      
    </div>
  </div>
  

  <div className="card" style={{backgroundColor:"papayawhip"}}>
  <div className="card-header"style={{fontStyle:"italic"}}>Standard</div>
  <img class="card-img-top" src="https://www.fairmont.com/assets/0/104/231/402/404/415/19923de5-4c44-4b60-a90b-9ebf7d75150e.jpg" alt="Card image cap"></img>
    <div className="card-body" style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-taxi" aria-hidden="true" ></i></h5>
      <p className="card-text">
Cost : Rs.1500/night
      </p>
    </div>
  </div>

 
</div>




{/* Ends */}
            </div>    
        </div>
    )
}
