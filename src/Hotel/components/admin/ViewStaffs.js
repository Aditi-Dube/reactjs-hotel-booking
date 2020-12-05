import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StaffServices from '../../services/StaffServices'

export default class ViewStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffs : []
        }
        this.addstaff =this.addstaff.bind(this);
        this.editstaff =this.editstaff.bind(this);
        this.deletestaff=this.deletestaff.bind(this);
    }
   
    deletestaff(staffId){
        StaffServices.deletestaff(staffId).then(res=>{
            this.setState({staffs:this.state.staffs.filter(staff =>staff.staffId !== staffId )})
        })
  }
    
  editstaff(staffId){
        this.props.history.push(`/addstaff/${staffId}`);
            }
    addstaff(){
                this.props.history.push('/addstaff/-1');
            }

    componentDidMount(){
        StaffServices.getStaff().then((res)=>{
            this.setState({staffs:res.data}
            )
        })
    }
    render() {
        return (
            <div><nav className="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
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

            <button onClick={this.addstaff} className="btn btn-primary" style={{backgroundColor:"lightsalmon"}}>Add Staff</button>
            
            {/* <div className="card-body"> */}
            <table className="table table-striped table-bordered">
       
        <thead>
        <tr>
      <th >staffId</th>
      <th >staffName</th> 
      <th >staffSalary</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.staffs.map((staff) =>
              <tr key={staff.staffId}>
                   <td>{staff.staffId}</td> 
                  <td>{staff.staffName}</td>
                  <td>{staff.staffSalary}</td>
                  <td>
                  <button onClick ={ () => this.editstaff(staff.staffId)} className = "btn btn-info" style={{backgroundColor:"lightsalmon"}}>Update</button>
                  <button onClick={()=> this.deletestaff(staff.staffId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>
              
          )
      }
      </tbody>
        </table>
        </div>  
        // </div>
            
        )
    }
}

