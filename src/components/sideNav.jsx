import React, { Component } from 'react'
import './style.css'


class SideNav extends Component {
    render() { 
        return (  
            <div class="col-sm-3 sidenav hidden-xs">
            <h2>GG</h2>
            <ul class="nav nav-pills nav-stacked">
                <li class="active"><a href="#section1">Dashboard</a></li>
                <li><a href="#section2">Age</a></li>
                <li><a href="#section3">Gender</a></li>
                <li><a href="#section3">Geo</a></li>
            </ul>
        </div>

        );
    }
}
 
export default SideNav;