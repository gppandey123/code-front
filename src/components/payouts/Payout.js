import React, { Component } from 'react';
import Header from '../utality/headerUtility/Header';
import {payouts} from '../../data/PayoutData';
export class Payout extends Component {

    render() {

        const item =payouts.map(item => {
            return(

                <div key={item.id} className="d-flex justify-content-between my-4 ">
                      <input type="checkbox" />
                      <span>${item.transaction}</span>
                      <span>{item.methodType }</span>
                      <span>{item.status}</span>
                      <span>{item.date}</span>
                      <span>{item.fees}</span>
                </div>

                
            )
        }) 
        return (
            <div className="p-5" style={{width:"1000px", height:"800px"}}>
                <div>
                <Header name="Hi Dash UI8"
                  greetings="Your Payouts"/>
                </div>
                

                <p>this is payout Component</p> 
                <div className="p-4 bg-light">
                         {item}
                    </div>
            </div>
        )
    }
}

export default Payout
