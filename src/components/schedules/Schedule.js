import React, { Component } from 'react';
import Header from '../utality/headerUtility/Header';
import Utality from '../utality/Utality';
export class Schedule extends Component {
    render() {
        return (
            <div>
                <Header name="Hi Dash UI8"
                greetings ="Schedules"/>
              <Utality title="Unity Dashboard"
                subject="Create YourBoar in minutes"
                link ="create schedule"/>  
            </div>
        )
    }
}

export default Schedule
