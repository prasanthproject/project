import React from 'react';
import IMAGES from '../Imges/Image'
import {Link} from 'react-router-dom';
import Invitation_main from '../Planners/Invitation/Invitation_main'
import Package_navbar from './Package_navbar'
import './package.css';
const Package_Invitations=()=>{
        return(
            <div id="invitation_package" style={{backgroundColor:"#eef5ff"}}> 
                <Package_navbar/>
                <Invitation_main/>
                <div className="contaier-fluid">
                    <div className="row" id="pagination1" >
                        <div className="col-4" id="prev">
                                <div className="text-end pt-5 py-2">
                                        <Link to="/package/beautician">
                                        <button className="">Previous </button>
                                        </Link>
                                        <img src={IMAGES.m5} alt="" />
                                </div>
                                <div className="text-end py-2 px-4">
                                        <h5>Beautician</h5>
                                </div>
                        </div>
                        <div className="col-4" id="now">
                                <div className="text-center pt-5 py-2">
                                        <img src={IMAGES.m6} alt="" />
                                </div>
                                <div className="text-center py-2 px-4">
                                        <h5>NOW</h5>
                                </div>
                        </div>
                        <div className="col-4" id="next">
                                <div className=" text-start pt-5 py-2">
                                        <img src={IMAGES.m7} alt=""/>
                                        <Link to="/package/photo_video_graphers">
                                        <button className=""> Next</button>
                                        </Link>
                                </div>
                                <div className="py-2">
                                        <h5>Photo {'&'} Video <br/>Grapher</h5>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        )
}
export default Package_Invitations;