import React from 'react';
import {Link} from 'react-router-dom';
import './Utility.css';

function Utality({title ,subject , link}) {
    return (
        <div className="slider_item d-flex  p-4 text-white">
            <div>
             <div className="slider_details">
               <h5> {title} </h5>
             </div>
             <div className="slider_text">
                  {subject}
             </div>
             <div className="my-5 ">
               <Link to ="modal" className="bg-white p-2 my-3">
                   {link}</Link>
             </div>
             </div>
             <div className="container">
                <img src="https://ui8-unity.herokuapp.com/img/slider-pic.png"
                    className ="img" alt="slider" />
             </div>
        </div>
    )
}

export default Utality
