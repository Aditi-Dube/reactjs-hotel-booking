import React,{Component} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import RegisterServices from '../services/RegisterServices'


export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      "userId":'',
      "userName":'',
      "emailId":'',
      "password":'',
      "phoneNumber":'',
      "address":'',
      "gender":'',
      "role":''
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changephoneNumberHandler = this.changephoneNumberHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser=(e)=>{
    e.preventDefault()
    let register = {
      userName:this.state.userName,
      emailId:this.state.emailId,
      password:this.state.password,
       phoneNumber:this.state.phoneNumber,
       address:this.state.address,
       gender:this.state.gender,
       role:this.state.role
      }
    console.log('register =>' +JSON.stringify(register));
    RegisterServices.createUser(register).then(res =>{
      this.props.history.push('/login')
    })
  }


  changeNameHandler = (event)=>{
    this.setState({userName:event.target.value})
  }
  changeEmailHandler = (event)=>{
    this.setState({emailId:event.target.value})
  }
  changePasswordHandler = (event)=>{
    this.setState({password:event.target.value})
  }
  changephoneNumberHandler = (event)=>{
    this.setState({phoneNumber:event.target.value})
  }
  changeAddressHandler =(event)=>{
    this.setState({address:event.target.value})
  }
  changegenderHandler = (event)=>{
    this.setState({gender:event.target.value})
  }
  changeRoleHandler = (event)=>{
    this.setState({role:event.target.value})
  }
  render(){

  
    return (
        <div>

<nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{fontStyle:"italic"}}>Home</Link>
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

            <div style={{backgroundImage:"url(https://media.tacdn.com/media/attractions-content--1x-1/0b/17/29/5a.jpg)",height:1000,backgroundSize:1400}}>
            {/* <div style={{backgroundColor:"aqua"}}> */}
            <h2 style={{color:"white"}}>Register</h2>
            
            <form >
            <div className="form-group" >
              <label style={{color:"gray"}}>Name</label>
              <input type="text" className="form-control"  name="userName" placeholder="enter name" value= {this.state.usame}  onChange={this.changeNameHandler} />
            </div>

            <div className="form-group">
              <label style={{color:"gray"}}>EmailId</label>
              <input type="email" className="form-control" name="emailId" placeholder="enter email" value= {this.state.emailId} onChange={this.changeEmailHandler}/>
            </div>

            <div className="form-group">
              <label style={{color:"gray"}}>Password</label>
              <input type="password" className="form-control"  name="password" placeholder="enter password" value= {this.state.password} onChange={this.changePasswordHandler}/>
            </div>

            <div className="form-group">
              <label style={{color:"gray"}}>Phone Number</label>
              <input type="Number" className="form-control"  name="phoneNumber" placeholder="enter phone Number" value= {this.state.phoneNumber} onChange={this.changephoneNumberHandler}/>
            </div>

            <div className="form-group">
                    <label style={{color:"gray"}}>Addres</label>
                    <input type="text" className="form-control"  name="address" placeholder="enter Address" value={this.state.address} onChange={this.changeAddressHandler}/>
                  </div>

            <div className="form-group">
                    <label style={{color:"gray"}}>Gender</label>
                    <input type="text" className="form-control"  name="gender" placeholder="enter Gender" value={this.state.gender} onChange={this.changegenderHandler}/>
            </div>

    {/* <div className="form-check">
    <div style={{color:"yellow"}}>Gender</div>
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
  <label className="form-check-label" for="exampleRadios1" style={{color:"yellow"}}> Male</label>
</div>

<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label className="form-check-label" for="exampleRadios2" style={{color:"yellow"}}> Female</label>
</div><br/> */}
            
  {/* <div className="form-group">
              <label style={{color:"yellow"}}>Role</label>
              <input type="text" className="form-control" name="role" placeholder="enter Role" value= {this.state.role} onChange={this.changeRoleHandler}/>
           </div> */}

            <div className="form-group">
                 <label>Role</label>
                <select name="role" className="form-control" value={this.state.role} onChange={this.changeRoleHandler}>
                <option>choose...</option>
                <option>user</option>
                <option>admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-success" onClick={this.saveUser} style={{backgroundColor:"lightsalmon"}}>Register</button>
          </form>
        </div>
        </div>
        
    )
}
}