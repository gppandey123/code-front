import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

import NavBottom from './NavBottom';
 class Nav extends Component {
    
    render() {
        return (
            
                <nav className="nav flex-column bg-light p-5">
                    <div  className="top-nav my-4  p-3">
                      <Link to ="/" className="nav-link">
                            <span className="mr-2">icon</span>
                            <span>Unity .</span>
                      </Link>
                    </div>

                    

                     <div className ="nav-component my-4 ">
                        <span>admin tools</span>
                        <Link to="/" className="nav-link" >
                            <div>
                            Overview 
                            </div>
                        </Link>
                        <Link to="/products" className="nav-link">
                            <div>
                            Products
                            </div>
                        </Link> 
                        <Link to="/campaings" className="nav-link">
                            <div>
                            Campaigss
                            </div> 
                        </Link>
                        <Link to="/schedules" className="nav-link">
                            <div>
                            Schedules
                            </div>
                        </Link>
                        <Link to="/payouts" className="nav-link">
                            <div>
                              Payouts
                            </div>
                        </Link>
                        <Link to="/statements" className="nav-link">
                            <div>
                                 Statements
                            </div>
                        </Link>
                        <Link to="/modal" className="nav-link">
                            <div>
                                Settings
                            </div>
                        </Link> 
                    </div>

                    <div className="last-nav my-4 p-3">
                         <NavBottom />
                    </div>
                </nav>
            
        )
    }
}

export default Nav
