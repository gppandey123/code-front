import React, { Component } from 'react';

import Header from '../utality/headerUtility/Header';
import Utality from '../utality/Utality';
import {ProductData} from '../../data/ProductData';

 class Product extends Component {
    render() {

        const item =ProductData.map(item => {
            return(

                <div key={item.id} className="d-flex justify-content-around mt-3">
                      <input type="checkbox" />
                      <img src={item.img1} alt ="image"
                      style={{width:'80px'}} />
                      <span>{item.imgName}</span>
                      <span>{item.presentStock }</span>
                      <span>{item.price}</span>
                      <span>{item.rating}</span>
                </div>

                
            )
        }) 
        return (
            <div className="p-5"> 
                <div>
                  <Header name="Hi Tam Tran"
                  greetings="Welcome back" />  
                </div>
               <div className="utility ">
                   <Utality title="Your Product"
                       subject="Create Your Product DashBoard in minute"
                       link="check all settings"
                   />
               </div>
               <div>
                
               {item}
               </div>
               <div className="d-flex justify-content-center">

               <button type="button" class="btn btn-primary">Load More</button>
               </div>
            </div>
        )
    }
}

export default Product;
