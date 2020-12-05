import React from 'react'
import {Link} from 'react-router-dom'
import './Book.css'

export default function Book() {
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
            
                {/* <h2 style={{textAlign:"center" ,color:"White"}}>Welcome User</h2> */}
                <h2></h2>

                <div className="card col-md-6 offset-md-3" style={{backgroundColor:"lightsalmon"}} id="card1">
                <div className="card-header" style={{textAlign:"center"}}>
                    <h4>Priceless Moments with Fairmont Jaipur</h4>
                    </div>
                 <div className="card-body">
                    <div className="row">
                        <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}>
                        Fairmont Hotels understand luxury is more than opulent interiors, exquisite service and iconic addresses.<br></br> 
                        <h4>"True luxury is the gift of unforgettable experiences"</h4>
                        It’s that moment when you see, hear, taste, touch or feel something as if for the very first time.<br></br> 
                        And it’s our privilege to help you experience this each time you’re our guest.
                        </h5>
                        </div><br/>
                        {/* <h5 style={{color:"white"},{fontStyle:"italic"},{textAlign:"center"}}> "Khamma Ghani", it says, and has the beauty that never betrays. </h5> */}
                    
                </div>
            </div>    


            </div>

        </div>
    )
}
