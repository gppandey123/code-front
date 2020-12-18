import React ,{useState} from 'react';
import './Modal.css';

import Mid from './Mid';

function Modal() {
    const [openModal ,closeModal] = useState(true);

    const setModal = () => {
         closeModal(false);
    }
    const SemState = () => {
        //    setTimeout(() => {
        //     closeModal(true);
        //     },1000 )
        console.log(openModal);    
    }

    return (
           <div>
               {openModal ? <Mid  openModal = {openModal} setModal = {setModal}/> : null}
           </div>
           
    )
}

export default Modal;
