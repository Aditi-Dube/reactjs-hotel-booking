import React, { Component } from 'react'
import StaffServices from '../../services/StaffServices'
import './AddStaff.css'

export default class AddStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffId:this.props.match.params.staffId,
             staffName:'',
             staffSalary:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this); 
        this.editstaff= this.editstaff.bind(this);
    }

    componentDidMount(){
        if(this.state.staffId == -1){
           return
           }
       else{
           
           StaffServices.getstaffbyid(this.state.staffId).then((res)=>{
               let staffs = res.data;
               this.setState({staffName:staffs.staffName,
                        staffSalary:staffs.staffSalary,
           
       });
           });
       }
       
   }
   cancel=(e)=>{
       e.preventDefault()
       this.props.history.push('/viewstaff')
   }
   editstaff=(e)=>{
       e.preventDefault()
       let staffs ={staffName:this.state.staffName, staffSalary:this.state.staffSalary}
       console.log('staffs =>' +JSON.stringify(staffs));

       if(this.state.staffId == -1){
           StaffServices.addStaff(staffs).then(res=>{
             this.props.history.push('/viewstaff')
           })
           
       }
       else{
           console.log(this.state.staffId)
           StaffServices.updatestaff(staffs,this.state.staffId).then(res=>{
               this.props.history.push('/viewstaff')
           })
       }
       
       
   }

    //only for adding
    // saveStaff=(e)=>{
    //     e.preventDefault()
    //     let staffs ={staffName:this.state.staffName, staffSalary:this.state.staffSalary}
    //     console.log('staffs =>' +JSON.stringify(staffs));
    //     StaffServices.addStaff(staffs).then(res=>{
    //         this.props.history.push('/viewstaff')
    //     })
    // }

    changeNameHandler =(event)=>{
        this.setState({staffName:event.target.value})
    }
    changeSalaryHandler=(event)=>{
        this.setState({staffSalary:event.target.value})
    }

    getTitle(){
        if(this.state.staffId == -1){
            return <h2 style={{color:"lightsalmon"}} className="text-center">Add Staff </h2>
        }
        else{
            return <h2 style={{color:"lightsalmon"}} className="text-center">Update Staff</h2>
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url(https://www.itl.cat/pngfile/big/203-2039706_photo-wallpaper-texture-design-papers-material-illustration.jpg)",height:700,backgroundSize:1400}}>
                 {/* <h2 id="home">Add Form</h2> */}
                 <div>
                     {
                        this.getTitle()
                     }
                 </div>
                 <form >
                     <div className="form-group">
                    <label style={{color:"black"}}>Name</label>
                    <input type="text" className="form-control"  name="staffName"  value={this.state.staffName} onChange={this.changeNameHandler}/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black"}}>Staff Salary</label>
                    <input type="number" className="form-control"  name="staffSalary"  value={this.state.staffSalary} onChange={this.changeSalaryHandler}/>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" onClick={this.editstaff} style={{backgroundColor:"lightsalmon"}}>Save</button>

                <button className="btn btn-danger" onClick={this.cancel}> Cancel</button>
                  
                  </form>
            </div>
        )
    }
}