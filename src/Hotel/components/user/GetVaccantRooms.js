import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomServices from '../../services/RoomServices'

export default class GetVaccantRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms :[]
        }
        this.editpayment = this.editpayment.bind(this);
    }

editpayment(roomId){
    this.props.history.push(`/payment/${roomId}`)
}
    componentDidMount(){
        RoomServices.getvaccantroom().then((res)=>{
            this.setState({rooms:res.data})
        })
    }
    render() {
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
            <br/>

    <div className="card-body">
 <table className="table table-striped table-bordered">
  <thead>
    <tr>

      <th >Room No</th>
      <th >Room Type</th> 
      <th >Room Cost</th>
      <th >Occupancy Status</th>
      <th>Book Room</th>
     </tr>
  </thead>
  <tbody>
      {
          this.state.rooms.map((room) =>
              <tr key={room.roomId}>
                   <td>{room.roomId}</td> 
                  <td>{room.roomType}</td>
                  <td>{room.roomCost}</td>
                  <td>{room.isOccupied}</td>
                  <td>
                      <button onClick={()=> this.editpayment(room.roomId)} style={{backgroundColor:"lightsalmon"}} className="btn btn-primary">Book Now</button>
                      </td>
              </tr>
              
          )
      }
      
  </tbody>

                    </table>

            
                    </div>
        
            </div>
        )
    }
}
