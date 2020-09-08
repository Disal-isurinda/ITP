import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import MainDashboard from './components/mainDashboard'
import SideNav from './components/sideNav'
import OrderForm from './components/orderForm'
import './App.css';
/*import {BrowserRouter as Router,
Route,
Switch,
Link,
Redirect
}from 'react-router-dom';
*/
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        
        <OrderForm/>
       
      <Footer/>
      </div>
    );
  }
}

export default App;
