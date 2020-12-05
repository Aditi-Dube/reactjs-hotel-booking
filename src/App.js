import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import AddStaffs from './Hotel/components/admin/AddStaffs';
import AddRooms from './Hotel/components/admin/AddRooms';
import AdminHome from './Hotel/components/admin/AdminHome';
import ViewAllRooms from './Hotel/components/admin/ViewAllRooms';
import ViewStaffs from './Hotel/components/admin/ViewStaffs';
import ViewPayments from './Hotel/components/admin/ViewPayments';
import ViewUser from './Hotel/components/admin/ViewUser';
import Book from './Hotel/components/user/Book';
import Home from './Hotel/components/Home';
import Login from './Hotel/components/Login';
import Register from './Hotel/components/Register';
import Services from './Hotel/components/Service';
import GetVaccantRooms from './Hotel/components/user/GetVaccantRooms';
// import UpdateRooms from './Hotel/components/admin/UpdateRooms';
import Payment from './Hotel/components/user/Payment';
import ViewStatus from './Hotel/components/user/ViewStatus';
import ViewImages from './Hotel/components/user/ViewImages';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/services"  component={Services}/>
        <Route exact path="/book" component={Book}/>
        <Route exact path="/viewImages" component={ViewImages}/>
        {/* <Route exact path ="/hotelbooking" component={HotelBooking}/> */}
        <Route exact path ="/adminhome" component={AdminHome}/>
        {/* <Route exact path ="/addstaff" component={AddStaffs}/> */}
        <Route exact path ="/addstaff/:staffId" component={AddStaffs}/>
        <Route exact path ="/viewstaff" component={ViewStaffs}/>
        <Route exact path ="/viewuser" component={ViewUser}/>
        <Route exact path ="/viewroom" component={ViewAllRooms}/>
        <Route exact path ="/addroom/:roomId" component={AddRooms}/>
        {/* <Route exact path ="/addroom" component={AddRooms}/> */}
        {/* <Route exact path ="/updateroom/:roomId" component={UpdateRooms}/> */}
        <Route exact path ="/getvaccantroom" component={GetVaccantRooms}/>
        <Route exact path ="/payment/:roomId" component={Payment}/>
         <Route  exact path="/viewpayment" component={ViewPayments}/> 
         <Route exact path="/status" component ={ViewStatus}/>
      
        
      </Switch>
    </Router>
  </div>
);
}

export default App;



