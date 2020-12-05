import React from 'react';
import'./Service.css'
import {Link} from 'react-router-dom' 


export default function Services() {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"white"},{fontStyle:"italic"}}>Home</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{fontStyle:"italic"}}>Services</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{fontStyle:"italic"}}>Register</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{fontStyle:"italic"}}>Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
        <div style={{backgroundImage:"url(https://www.skytraktravel.com/wp-content/uploads/2019/08/21_RoyalRajasthan.jpg)",height:"800px",backgroundSize:1400}}>
<br></br> <br></br> <br></br>         
            <h2>"Padharo Mahrey Des"<br></br> Welcome to Our Land. <br></br>It invites you to unravel its opulence and unbeatable grandeur.</h2><br/><br/>
            


<div className="card-deck" >

  <div className="card"  style={{backgroundColor:"papayawhip"}}>
  <div className="card-header" style={{fontStyle:"italic"}}>Accommodation</div>
    <div className="card-body" style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-wifi" aria-hidden="true"> </i> </h5>
      <p className="card-text">Fairmont Jaipur is truly a royal destination. Built in the tradition of the region’s grand Mughal palaces, this majestic hotel offers the best in modern amenities and is perfectly complemented with the rich heritage of Rajasthan .</p>
      
    </div>
  </div>

  <div className="card" style={{backgroundColor:"papayawhip"}}>
    <div className="card-header"style={{fontStyle:"italic"}}>Ruhaab Spa</div>
    <div className="card-body"  style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-coffee" aria-hidden="true"> </i> </h5>
      <p className="card-text">With luxurious facilities to complement the indulgent therapies, every guest is enveloped in a sense of deep relaxation and rejuvenation, the moment they step into Ruhab.</p>
      
    </div>
  </div>

  <div className="card" style={{backgroundColor:"papayawhip"}}>
  <div className="card-header"style={{fontStyle:"italic"}}>Dining</div>

    <div className="card-body"  style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-ambulance" aria-hidden="true"></i></h5>
      <p className="card-text">From seasonally inspired menus to dining experiences that will satisfy any craving, see what our chefs are preparing just for you.</p>
      
    </div>
  </div>
  

  <div className="card" style={{backgroundColor:"papayawhip"}}>
  <div className="card-header"style={{fontStyle:"italic"}}>Guest Services</div>
    <div className="card-body" style={{color:"peru"}}>
      <h5 className="card-title"> <i className="fa fa-taxi" aria-hidden="true" ></i></h5>
      <p className="card-text">From the exciting outdoors to the lavish indoors of the hotel and a choice of luxurious options await our guests. Unwind by the outdoor pool, indulge in a therapeutic massage or get fit at our state-of-the-art Health & Fitness centre.</p>
    </div>
  </div>

 
</div>


</div>
        </div>
    )
}
