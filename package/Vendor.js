import React from 'react';
import IMAGES from '../Imges/Image'
import {Link} from 'react-router-dom';
import './package.css';
import Package_navbar from './Package_navbar'
import Vendor_main from '../Planners/Vendor/Vendor_main';
const Package_Vendor=()=>{
    
        return(
            <div id="vender_package" style={{backgroundColor:"#eef5ff"}}>  
            <Package_navbar/>
            <Vendor_main/>
            <div className="contaier-fluid">
                    <div className="row" id="pagination1" >
                   <div className="col-4" id="prev">
                            <div className="text-end pt-5 py-2 mt-5">
                                <Link to="/package">
                                    <button className="">Previous</button>
                                </Link>
                                    {/* <img src={IMAGES} alt="" /> */}
                            </div>
                            <div className="text-end py-2 px-4 mt-5">
                                    {/* <h5>PREV</h5> */}
                            </div>
                   </div>
                   <div className="col-4" id="now">
                        <div className="text-center pt-5 py-2">
                                
                                <img src={IMAGES.m1} alt="" />
                        </div>
                        <div className="text-center py-2 px-4">
                                <h5>Vendor</h5>
                        </div>
                   </div>
                   <div className="col-4" id="next">
                        <div className=" text-start pt-5 py-2">
                                <img src={IMAGES.m2} alt=""/>
                                <Link to="/package/catering">
                                <button className=""> Next</button>
                                </Link>
                        </div>
                        <div className="py-2">
                                <h5>Catering</h5>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        )
}
export default Package_Vendor;