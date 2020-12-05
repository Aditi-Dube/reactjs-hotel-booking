import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ViewStatus extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor:"skyblue"}}>
                <span className="navbar-brand mb-0 h1">User Portal</span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item5 active">
                        <Link className="nav-link" to="/getvaccantroom" style={{color:"blue"}}>Book Room</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item6 active">
                        <Link className="nav-link" to="/viewImages" style={{color:"blue"}}>View Images</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item7 active">
                        <Link className="nav-link" to="/" style={{color:"red"}}>Logout</Link>
                    </li>
                </ul> 
            </nav>
            <h2 className="text-center"> Booking Status</h2>
            <div className="card col-md-6 offset-md-3" style={{backgroundColor:"pink"}}>
                 <div className="card-body">
                    <div className="row">
                        <h3 style={{color:"green"}}>Your Booking is Successfully</h3>
                        </div><br/>
                        <h4 style={{color:"blue"}}>Thanks for Booking!!..</h4>
                    
                </div>
            </div>
           </div> 
        )
    }
}  