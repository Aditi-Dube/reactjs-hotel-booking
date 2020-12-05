import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomServices from '../../services/RoomServices'


export default class ViewAllRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms :[]
        }
        this.addRoom =this.addRoom.bind(this);
        this.editRoom =this.editRoom.bind(this);
        this.deleteroom=this.deleteroom.bind(this);
    }

    deleteroom(roomId){
        RoomServices.deleteRoom(roomId).then(res=>{
            this.setState({rooms:this.state.rooms.filter(room =>room.roomId !== roomId )})
        })
  }
    
    editRoom(roomId){
        this.props.history.push(`/addroom/${roomId}`);
    }

    componentDidMount(){
        RoomServices.getallroom().then((res)=>{
            this.setState({rooms:res.data})
        })
    }
    addRoom(){
        this.props.history.push('/addroom/-1');
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
            </nav> <br/> 

             <button  onClick={this.addRoom} className="btn btn-primary" style={{backgroundColor:"lightsalmon"}}>Add Room</button>
            <table className ="table table-striped">
  <thead>
    <tr>
      <th >roomId</th>
      <th >roomType</th> 
      <th >roomCost</th>
      <th >isOccupied</th>
        <th>Actions</th>
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
                      <button onClick ={ () => this.editRoom(room.roomId)} className = "btn btn-info" style={{backgroundColor:"lightsalmon"}}>Update</button>
                      <button onClick={()=> this.deleteroom(room.roomId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>
              
          )
      }
      
  </tbody>
     </table>
         
         </div>
        )
    }
}
