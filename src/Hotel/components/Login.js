import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


export default class Login extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        role : '',
        emailId:'',
         password:''
   }
   this.changeRole = this.changeRole.bind(this);
    this.changeEmail= this.changeEmail.bind(this);
   this.changePassword= this.changePassword.bind(this);}

changeRole =(event)=>{
   this.setState({role:event.target.value})
}

changeEmail =(event)=>{
     this.setState({ emailId:event.target.value})
}
changePassword= (event)=>{
    this.setState({ password:event.target.value})
}

checkRole=(e)=>{
   e.preventDefault()
   let role = {role:this.state.role}
   console.log('role =>' +JSON.stringify(role));
   if(this.state.role === "admin" && this.state.emailId === "admin@hbms.com" && this.state.password === "admin")
    {
       this.props.history.push("/adminhome")
    }
    else if(this.state.role === "user" && this.state.emailId === "aditi@gmail.com" && this.state.password === "aditi" )
    {
        this.props.history.push("/book")
    }
   
    else if(this.state.role === "user" && this.state.emailId === "apurva@gmail.com" && this.state.password === "apurva" )
    {
        this.props.history.push("/book")
    }
    else if(this.state.role === "user" && this.state.emailId === "thanu@gmail.com" && this.state.password === "thanu" )
    {
        this.props.history.push("/book")
    }
    else if(this.state.role === "user" && this.state.emailId === "dhanu@gmail.com" && this.state.password === "dhanu" )
    {
        this.props.history.push("/book")
    }

    else{
        alert("invalid user")
    }
}
render(){
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1"><h4>Fairmont Jaipur</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{fontStyle:"italic"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{fontStyle:"italic"}}><h6>Services</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{fontStyle:"italic"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{fontStyle:"italic"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:"url(https://luxurylaunches.com/wp-content/uploads/2017/03/jaipur-1170x627.jpg)", height:800,backgroundSize:1500}}><br/>
            <h2 style={{textAlign:"center",color:"black"}}>Login</h2>
            
            <form>
            <div className="form-group">
              <label style={{color:"black"}}>Email address</label>

              <input type="email" className="form-control" name = "emailId" placeholder="example@gmail.com"  onChange={this.changeEmail}/>
            </div><br/>
            <div className="form-group">
              <label style={{color:"black"}}>Password</label>
              <input type="password" className="form-control" name="pasword" placeholder="enter password" onChange={this.changePassword} />
            </div><br/>

            {/* <div className="form-group">
              <label style={{color:"black"}}>Role</label>
              <input type="text" className="form-control" name="role" placeholder="enter role" value={this.state.role} onChange={this.changeRole}/>
            </div> */}

            <div className="form-group">
                <label>Role</label>
                <select name="role" className="form-control" value={this.state.role} onChange={this.changeRole}>
                <option>choose...</option>
                <option>user</option>
                <option>admin</option>
                </select>
            </div>


            

            <button type="submit" className="btn btn-success" onClick={this.checkRole} style={{backgroundColor:"lightsalmon"}}>Login</button>
            
             </form>
        </div>
        </div>
    )
}

}