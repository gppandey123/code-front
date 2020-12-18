import React, { Component } from 'react';
import Header from '../utality/headerUtility/Header';
import Utality from '../utality/Utality';
 class Campaign extends Component {
    render() {
        return (
            <div>
                <Header name="Hi Dash UI8"
                  greetings="Campaigns"/>
              
              <Utality title="Set a Google Analytics Code"
                       subject="Did you know you can set
                        a Google Analytics code for your prodcuts?"
                        link ="setting"
                   />
            </div>
        )
    }
}

export default Campaign
