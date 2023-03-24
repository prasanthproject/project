import React from 'react';
import IMAGES from '../Imges/Image'
import Boutique_main from '../Planners/Boutique/Boutique_main'
import Package_navbar from './Package_navbar'
import {Link} from 'react-router-dom';
import './package.css';
const Package_Boutique=()=>{
        return(
            <div id="boutique_package" style={{backgroundColor:"#eef5ff"}}>
                <Package_navbar/>
                <Boutique_main/>
                <div className="contaier-fluid">
                    <div className="row" id="pagination1" >
                   <div className="col-4" id="prev">
                            <div className="text-end pt-5 py-2">
                                  <Link to="/package/catering">
                                        <button className=""> Previous</button>
                                  </Link>
                                <img src={IMAGES.m2} alt="" />
                            </div>
                            <div className="text-end py-2 px-4">
                                    <h5>Catering</h5>
                            </div>
                   </div>
                   <div className="col-4" id="now">
                        <div className="text-center pt-5 py-2">
                                <img src={IMAGES.m3} alt="" />
                        </div>
                        <div className="text-center py-2 px-4">
                                <h5>NOW</h5>
                        </div>
                   </div>
                   <div className="col-4" id="next">
                        <div className=" text-start pt-5 py-2">
                            <img src={IMAGES.m4} alt=""/>
                            <Link to="/package/mehandi">
                                <button className=""> Next</button>
                            </Link>
                        </div>
                        <div className="py-2">
                                <h5>Mehandi</h5>
                        </div>
                   </div>
                </div>
            </div>    
        </div>

        )
}
export default Package_Boutique;