import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../../services/RegisterServices'

export default class ViewUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             registers : []
        }
    }
    componentDidMount(){
        RegisterServices.getUser().then((res)=>{
            this.setState({registers:res.data})
        });
    }
render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span className="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item8 active">
                        <Link  className="nav-link" to="/viewuser" style={{fontStyle:"italic"}}>View Users</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item9 active">
                        <Link  className="nav-link" to="/viewpayment" style={{fontStyle:"italic"}}>View Payments</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item10 active">
                        <Link  className="nav-link" to="/viewstaff" style={{fontStyle:"italic"}}>View Staffs</Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item11 active">
                        <Link  className="nav-link" to="/viewroom" style={{fontStyle:"italic"}}>View Rooms</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item12 active">
                        <Link  className="nav-link" to="/" style={{fontStyle:"italic"}}>Logout</Link>
                    </li>
                </ul> 
            </nav>  <br/>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>userName</th> 
                        <th>emailId</th>
                        <th>password</th>
                        <th>phoneNumber</th>
                        <th>address</th>
                        <th>gender</th>
                        <th>role</th> 
                    </tr>
                </thead>
            <tbody>
                {
                    this.state.registers.map((register) =>
                        <tr key={register.id}>
                            <td>{register.userId}</td> 
                            <td>{register.userName}</td>
                            <td>{register.emailId}</td>
                            <td>{register.password}</td>
                            <td>{register.phoneNumber}</td>
                            <td>{register.address}</td>
                            <td>{register.gender}</td>
                            <td>{register.role}</td>
                        </tr>
                     )
                 }
            </tbody>
        </table>

            </div>
        )
    }
}
