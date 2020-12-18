import React, { Component } from 'react';
import Header from '../utality/headerUtility/Header';
import {statement} from '../../data/StatementData';
 class Statement extends Component {
    render() {

        const item =statement.map(item => {
            return(
                <div key={item.id} className="d-flex justify-content-between my-4 ">
                      <input type="checkbox" />
                      <span>{item.date}</span>
                      <span>{item.orderId }</span>
                      <span>${item.Amount}</span>
                      <span>{item.price}</span>
                      <span>{item.type}</span>
                </div>

                
            )
        }) 
        return (
            <div  className="p-5" style={{width:"1000px", height:"800px"}}>
               <div>
                <Header name="Hi Dash UI8"
                  greetings="Earnings Report" />
            </div>

             
            <div className="bg-dark text-white p-4">
              <p>transation details</p>
                {item}
                </div>   
            </div>
        )
    }
}

export default Statement;
