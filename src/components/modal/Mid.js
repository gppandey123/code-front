import React, { Component } from 'react';
import './Mid.css';

 class Mid extends Component {
    render() {
        return (
                <div className="mod" onClick ={() => this.props.setModal()}>
                      <div className="container"  >
                          <div id ="modal">
                              <div>
                                  <div className=" d-flex justify-content-around">
                                       <h5>Account Settings</h5>
                                       <button onClick ={() => this.props.setModal()}>X</button>
                                  </div>
                               </div>

                                <div>
                                  <div className="d-flex justify-content-around">
                                    <button type="button" className="btn btn-outline-primary active mx-2">Primary</button>
                                    <button type="button" className="btn btn-outline-primary mx-2">Secondary</button>
                                    <button type="button" className="btn btn-outline-primary mx-2">Success</button>
                                    <button type="button" className="btn btn-outline-primary mx-2">Danger</button>
                                    <button type="button" className="btn btn-outline-primary mx-2">Warning</button>   
                                  </div>
                               </div>

                               <div>
                                   <span>your awtar</span>
                               </div>
                               
                              <div className="d-flex justify-content-around" id="upload">
                                  <img src="https://ui8-unity.herokuapp.com/img/ava.png"
                                     alt ="avtar" />
                                  <button type="button" class="btn btn-primary btn-sm">Large button</button>
                                  <button type="button" class="btn btn-secondary btn-sm">Large button</button>
                              </div>

                              <div>
                
                                  <div className="d-flex justify-content-around">
                                       <div>
                                       <label for="inputName4">Enter Your Name</label>
                                        <input type="text"  id="inputName4"  />
                                        </div> 
                                        <div>
                                       <label for="inputName5">Display Name Name</label>
                                        <input type="text"  id="inputName5"  />
                                        </div> 
                                  </div>
                                        
                                    
                                        
                                        
                              </div>
                           </div>
                        </div>
                    </div>
              
            
        )
    }
}

export default Mid
