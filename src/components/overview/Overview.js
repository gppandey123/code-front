import React, { Component } from 'react';
import './Overview.css';

import Header from '../utality/headerUtility/Header';
import Utality from '../utality/Utality';

 class Overview extends Component {
    render() {
        return (
            <div className="p-5"> 
                <div>
                  <Header />  
                </div>
               <div className="utility">
                   <Utality title="Set a Google Analytics Code"
                       subject="Did you know you can set
                        a Google Analytics code for your prodcuts?"
                        link ="setting"
                   />
               </div>
            </div>
        )
    }
}

export default Overview
