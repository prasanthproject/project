import React ,{useState}from 'react';
import './Beautician.css';
import IMAGES from '../../Imges/Image';
import {Bride,Groom} from './Beautician_details';

const Beautician_main=()=>{
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(index)=>{
      setToggleState(index);
      
    }
    return(
        <div id="beautician">          
            <div className="container" id="beautician_menubar">
                <ul className="nav nav-pills justify-content-around  ">
                    <li className="nav-item col-12 col-md-5 mx-1 my-2">
                        <a id="nav-link" className={toggleState === 1 ? "nav-link active":"nav-link"} data-toggle="pill" href="#groom" onClick={()=>toggleTab(1)}>Groom <img src={IMAGES.groom} alt=""/> </a>
                    </li>
                    <li className="nav-item col-12 col-md-5 mx-1 my-2">
                        <a id="nav-link" className={toggleState === 2 ? "nav-link active":"nav-link"} data-toggle="pill" href="#bride" onClick={()=>toggleTab(2)}>Bride <img src={IMAGES.bride}  alt=""/></a>
                    </li>
                </ul>
   
                <div className="tab-content" >
                        <div id="groom"  className={toggleState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                <Groom/>
                        </div>
                        <div id="bride"  className={toggleState === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                <Bride/>
                        </div>

                </div>
            </div>
            
        </div>
    )
}
export default Beautician_main;