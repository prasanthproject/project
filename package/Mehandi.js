import React from 'react';
import IMAGES from '../Imges/Image'
import {Link} from 'react-router-dom';
import Mehandi_main from '../Planners/Mehandi/Mehandi_main'
import Package_navbar from './Package_navbar'
import './package.css';
const Package_Mehandi=()=>{
        return(
            <div id="mehandi_package" style={{backgroundColor:"#eef5ff"}}>
                <Package_navbar/>
                <Mehandi_main/>
            <div className="contaier-fluid">
                <div className="row" id="pagination1" >
                   <div className="col-4" id="prev">
                            <div className="text-end pt-5 py-2">
                                <Link to="/package/boutique">
                                        <button className=""> Previous</button>
                                </Link>
                                <img src={IMAGES.m3} alt="" />
                            </div>
                            <div className="text-end py-2 px-4">
                                    <h5>Boutique</h5>
                            </div>
                   </div>
                   <div className="col-4" id="now">
                        <div className="text-center pt-5 py-2">
                                <img src={IMAGES.m4} alt="" />
                        </div>
                        <div className="text-center py-2 px-4">
                                <h5>NOW</h5>
                        </div>
                   </div>
                   <div className="col-4" id="next">
                        <div className=" text-start pt-5 py-2">
                            <img src={IMAGES.m5} alt=""/>
                            <Link to="/package/beautician">
                                    <button className=""> Next</button>
                            </Link>
                        </div>
                        <div className="py-2">
                                <h5>Beautician</h5>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        )
}
export default Package_Mehandi;