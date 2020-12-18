import React, { Component } from 'react';

 class Header extends Component {
    render() {
        return (
            
               <div className="text-dark">
                        {this.props.name },
                        <h1>{this.props.greetings} </h1>
                    <div>

                    <div>
                    <form className="form-inline m">
                            <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                       <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                    <i className="fas fa-bell bg-utility "></i>
                     </div>
                    </div>
                </div> 
            
        )
    }
}

export default Header
