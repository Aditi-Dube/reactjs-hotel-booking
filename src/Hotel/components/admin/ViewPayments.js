import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaymentServices from '../../services/PaymentServices'

export default class ViewPayments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             payment:[]
        }
    }
    componentDidMount(){
        PaymentServices.getpayment().then((res)=>{
            this.setState({payment:res.data});
        })
    }
    render() {
        return (
            <div>
                 <nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
            
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
            </nav>
              
            <table class="table table-striped">
  <thead>
    <tr>
     
      <th >paymentId</th>
      <th >roomId</th> 
      <th >User Name</th>
      <th >RoomCost</th>
      <th >cvv</th>
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.payment.map((pay) =>
              <tr key={pay.paymentId}>
                   <td>{pay.paymentId}</td> 
                  <td>{pay.roomId}</td>
                  <td>{pay.userName}</td>
                  <td>{pay.roomCost}</td>
                  <td>{pay.cvv}</td>
                 
              </tr>
              
          )
      }
      
  </tbody>
</table>

            </div>
        )
    }
}
