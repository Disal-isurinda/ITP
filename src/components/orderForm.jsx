import React, { Component } from 'react'

export class OrderForm extends Component{
    render() {
        return (
        <div class="container-fluid">
            <div class="row content">
                <div class="col-sm-3 sidenav hidden-xs bg-danger text-white">
                    <h2>GG</h2>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#section1">Dashboard</a></li>
                        <li><a href="#section2">Age</a></li>
                        <li><a href="#section3">Gender</a></li>
                        <li><a href="#section3">Geo</a></li>
                    </ul>
                </div>
    
                <div class="col-sm-9">
                    <div class="well">
                        <h4>Order form</h4>
                        <p>Some text..</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Users</h4>
                                <p>1 Million</p> 
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Pages</h4>
                                <p>100 Million</p> 
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Sessions</h4>
                                <p>10 Million</p> 
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Bounce</h4>
                                <p>30%</p> 
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p> 
                                <p>Text</p> 
                                <p>Text</p> 
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p> 
                                <p>Text</p> 
                                <p>Text</p> 
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p> 
                                <p>Text</p> 
                                <p>Text</p> 
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="well">
                                <p>Text</p> 
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default OrderForm