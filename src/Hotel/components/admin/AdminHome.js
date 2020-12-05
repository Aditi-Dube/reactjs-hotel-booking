import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AdminHome.css'

export default class AdminHome extends Component {
    render() {
        return (
            <div style={{backgroundImage:"url(https://www.swantour.com/sites/default/files/City-Palace-Jaipur.jpg)",height:800,backgroundSize:1500}}>
                
                 <nav className="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span className="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item8 active">
                        <Link  className="nav-link" to="/viewuser" style={{color:"black"},{fontStyle:"italic"}}>View Users</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item9 active">
                        <Link  className="nav-link" to="/viewpayment" style={{color:"black"},{fontStyle:"italic"}}>View Payments</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item10 active">
                        <Link  className="nav-link" to="/viewstaff" style={{color:"black"},{fontStyle:"italic"}}>View Staffs</Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item11 active">
                        <Link  className="nav-link" to="/viewroom" style={{color:"black"},{fontStyle:"italic"}}>View Rooms</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item12 active">
                        <Link  className="nav-link" to="/" style={{color:"black"},{fontStyle:"italic"}}>Logout</Link>
                    </li>
                </ul> 
            </nav> 
             
            {/* <h1 id="home" style={{color:"blue"}}> Welcome To Admin portal</h1> */}
<div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div className="card col-md-6 offset-md-3" style={{backgroundColor:"lightsalmon"}}>
<div className="card-header"><h5>Fairmont Jaipur</h5></div>
                 <div className="card-body">
                    <div className="row">
                    
                        </div>
                        <h5>Welcome To The Admin Portal</h5>
                        <h5>Hope you have a great day at work!</h5>
                    
                </div>
            </div>
</div>



            </div>
        )
    }
}
