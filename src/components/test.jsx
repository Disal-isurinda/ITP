import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class OrderForm extends Component{
    
    render() {
        return (
            
        <div class="container-fluid  ">
            <div class="row content ">
                <div class="wdth col-sm-3 sidenav hidden-xs clr ">
                    <h2>GG</h2>
                    <ul class="nav nav-pills nav-stacked ">
                        <li class="active"><a href="#section1">Dashboard</a></li>
                        <li><a href="#section2">Age</a></li>
                        <li><a href="#section3">Gender</a></li>
                        <li><a href="#section3">Geo</a></li>
                    </ul>
                </div>
    
                <div class="col-sm-9 ">{/* want*/}
                    <div class="well ">{/* want*/}
                        <h4>Order form</h4>
                        <p>Some text..</p>
                    </div>
                    
                    
                   <div class="cmp">
                       </div>
                       <hr/>
                       <div class="cmp">
                       </div>
                       <hr/>
                       <div class="cmp">
                       </div><br/><br/>
                </div>
            </div>
        </div>
    )
}
}

export default OrderForm