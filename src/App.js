import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import MainDashboard from './components/mainDashboard'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <MainDashboard/>
      <Footer/>
      </div>
    );
  }
}

export default App;