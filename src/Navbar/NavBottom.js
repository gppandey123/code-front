import React , {useState} from 'react';

function NavBottom() {
    const [toggle , settoggle] = useState(true);

      const toggleChange = () => {
          settoggle(!toggle);
      }
    return (
        <div>
            {
          toggle ? <i className="fas fa-sun"
           onClick ={toggleChange}>
           </i> :
              <i className="fas fa-moon" onClick={toggleChange}></i>
            }
             <i className={`fas ${toggle ? "fa-toggle-off" : "fa-toggle-on"}`}
             onClick={toggleChange}></i>  
        </div>
    )
}

export default NavBottom
