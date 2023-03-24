import React from 'react';
import IMAGES from '../Imges/Image'
import {Link} from 'react-router-dom';
import PhotoVideo_main from '../Planners/Photo_Video_grapher/PhotoVideo_main'
import Package_navbar from './Package_navbar'
import './package.css';

const Package_photo_video=()=>{
        return(
            <div id="photovideo_package">
                <Package_navbar/>
                <PhotoVideo_main/>
                <div className="contaier-fluid">
                    <div className="row" id="pagination1" >
                   <div className="col-4" id="prev">
                            <div className="text-end pt-5 py-2">
                                <Link to="/package/invitation">
                                    <button className=""> Previous</button>
                                 </Link>
                                <img src={IMAGES.m6} alt="" />
                            </div>
                            <div className="text-end py-2 px-4">
                                    <h5>Invitation</h5>
                            </div>
                   </div>
                   <div className="col-4" id="now">
                        <div className="text-center pt-5 py-2">
                                <img src={IMAGES.m7} alt="" />
                        </div>
                        <div className="text-center py-2 px-4">
                                <h5>NOW</h5>
                        </div>
                   </div>
                   <div className="col-4" id="next">
                        {/* <div className=" text-start pt-5 py-2">
                            <img src={IMAGES.m2} alt=""/>
                        </div>
                        <div className="py-2">
                                <h5>NEXT</h5>
                        </div> */}
                   </div>
                </div>
            </div>
        </div>
        )
}
export default Package_photo_video;