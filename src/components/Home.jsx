import React, { Component } from 'react'
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Header from './components/header'
import Footer from './components/footer'
import MainDashboard from './components/mainDashboard'

import './App.css';

class Home extends Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
                <Header/>
            <MainDashboard/>
    
<Footer/>
                
            </div>
        )
    }
}

export default Home
