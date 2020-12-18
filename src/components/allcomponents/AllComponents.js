import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

import Overview from '../overview/Overview';
import Product from '../product/Product';
import Campaign from '../compaign/Campaign';
import Schedule from '../schedules/Schedule';
import Payout from '../payouts/Payout';
import Statement from '../statements/Statement';
import Modal from '../modal/Modal';
import Error from '../pagenotfound/Error';

export class AllComponents extends Component {
    render() {
        return (
            <div className="p-5">
               <Switch>
                    <Route path="/" component={Overview} exact />
                    <Route path ="/campaings" component={Campaign} />
                    <Route path ="/schedules" component ={Schedule} />
                    <Route path ="/products" component={Product} />
                    <Route path ="/payouts" component ={Payout} />
                    <Route path ="/statements" component ={Statement} />
                    <Route path ="/modal">
                        <Modal 
                        openModel={this.props.openModel} setModel={this.props.setModel}/>
                        </Route>
                    <Route  component ={Error} />
               </Switch>   
            </div>
        )
    }
}

export default AllComponents
