import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import PaymentServices from '../../services/PaymentServices';

export default class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roomId:this.props.match.params.roomId,
            userName:'',
            roomCost:'',
            cvv:''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this)
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this)
        this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this)
        this.changeCvvHandler = this.changeCvvHandler.bind(this)
        this.payment = this.payment.bind(this)

    }
    payment=(e)=>{
        e.preventDefault()
        let payment = {roomId:this.state.roomId,
            userName:this.state.userName,
            roomCost:this.state.roomCost,
            cvv:this.state.cvv
        }
        console.log('payment =>' +JSON.stringify(payment));
        PaymentServices.addpayment(payment).then(res =>{
          alert("Your payment is Succesfull")
          this.props.history.push('/book');
        })
      }
    changeIdHandler = (event)=>{
        this.setState({roomId:event.target.value})
      }
      changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value})
      }
      changeRoomCostHandler=(event)=>{
        this.setState({roomCost:event.target.value})
      }
      changeCvvHandler=(event)=>{
        this.setState({cvv:event.target.value})
      }
    render() {
        return (
            <div>
                
                <nav class="navbar navbar-light" style={{backgroundColor:"lightsalmon"}}>
                <span class="navbar-brand mb-0 h1" style={{fontStyle:"italic"}}>Fairmont Jaipur</span>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/getvaccantroom" style={{fontStyle : "italic"}}>Book Room</Link>
                    </li>
                </ul>
              
               <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/" style={{fontStyle:"italic"}}>Logout</Link>
                    </li>
                </ul> 
            </nav>
                     <form>
                     <div class="form-group">
                    <label style={{color:"black"}}>RoomId</label>
                    <input type="number" class="form-control"  name="roomId"  value={this.state.roomId} onChange={this.changeIdHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>User Name</label>
                    <input type="text" class="form-control"  name="userName"  value={this.state.userName} onChange={this.changeUserNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>CVV</label>
                    <input type="password" class="form-control"  name="cvv"  value={this.state.cvv} onChange={this.changeCvvHandler}/>
                  </div>
                  <button type="submit" class="btn btn-dark" onClick={this.payment} style={{backgroundColor:"lightsalmon"}}>Make Payment</button>
                  </form>
                
            </div>
        )
    }
}
