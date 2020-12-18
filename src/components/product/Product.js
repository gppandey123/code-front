import React, { Component } from 'react';

import Header from '../utality/headerUtility/Header';
import Utality from '../utality/Utality';

 class Product extends Component {
    render() {
        return (
            <div className="p-5"> 
                <div>
                  <Header />  
                </div>
               <div className="utility ">
                   <Utality title="Your Product"
                       subject="Create Your Product DashBoard in minute"
                       link="check all settings"
                   />
               </div>
            </div>
        )
    }
}

export default Product;
