import React,{useState} from 'react';
import Planner_navbar from '../Planner_navbar';
import "./Photo_Video_grapher.css";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IMAGES from '../../Imges/Image'
import {Switch} from 'antd';

const  Show_and_Hide=()=>
{
    return(
        <>
            <div id="part2">
                <div className="card">
                    <div className="row">
                        <h6 className="col-4"><CalendarMonthRoundedIcon id="icon"/> Date of Shoot </h6>
                        <input type="date" className="col-8 form-control"  />
                    </div>
                </div>
                <div className="card">
                    <div className="row">
                        <h6  className="col-4"> <LocationOnIcon id="icon"/> Location of Shoot</h6>
                            <input type="text" className="col-8 form-control shadow-none " placeholder="Enter the Location" autoComplete="off"/>
                    </div>
                </div>
                <div className="card">
                    <div className="row">
                        <input type="checkbox"  className=" bg-info col-1"  />
                        <h6 className="col-8" id="video" > Do yu want Videographer for song shoot</h6>
                    </div>
                </div>
            </div>  
        </>         
    )
}

const PhotoVideo_main=()=>{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);

    const [toggle,setToggle]=useState();
    const toggler=()=>{
        toggle ? setToggle(false):setToggle(true); 
    }

    return(
      <>        
        <div className="container-fluid mb-5" id="photo_video_grapher">
                <div className="row">
                    <div className="col-2" id="images_set">
                                <img src={IMAGES.a1} alt="" className="mt-5"/>
                                <img src={IMAGES.a1} alt="" />
                                <img src={IMAGES.a1} alt="" />
                    </div>
                    <div className="col-8" id="wedding_shoot">
                            <div className="part1">
                                <h3>Wedding PhotoShoot</h3>
                                <div className="card">
                                    <div className="row">
                                        <h6 className="col-4"><CalendarMonthRoundedIcon id="icon"/> Date of Wedding </h6>
                                        <input type="date" className="col-5 form-control"  />
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <h6  className="col-4"> <LocationOnIcon id="icon"/> Location of Wedding</h6>
                                         <input type="text" className="col-5 form-control shadow-none " placeholder="Enter the Location" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                    <h6 className="col-4"> <PhotoCameraIcon id="icon"/> No of PhotoGrapher</h6>                                
                                        <div class="form-group col-md-8">
                                            <div class="row">
                                                <button className="btn btn-success col-1"  onClick={()=>setCount(count-1)} disabled={count===0} ><b>-</b></button>
                                                {/* <input type={count}  id="incr" className="shadow-none border border-none col-2 form-control" /> */}
                                                    <p className="col-3 text-center">{count}</p>
                                                <button className="btn btn-success col-1"  onClick={()=>setCount(count+1)} disabled={count===5} ><b>+</b></button>	
                                                	
                                            </div>	
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <h6 className="col-4"> <VideocamRoundedIcon id="icon"/> No of Videographer</h6>
                                        <div class="form-group col-md-8">
                                            <div class="row">
                                                <button className="btn btn-success col-1"  onClick={()=>setCount1(count1-1)} disabled={count1===0}><b>-</b></button>
                                                    <p className="col-3 text-center">{count1}</p>
                                                <button className="btn btn-success col-1"  onClick={()=>setCount1(count1+1)} disabled={count===5}><b>+</b></button>	
                                                    
                                            </div>	
                                        </div>    
                                    </div>
                                </div>

                            </div>
                            <div className="part2">
                                <div className="form-group" id="pre_shoot">
                                    <label className="row">  
                                        <h3 className="col-5">Pre-Wedding Shoot </h3> 
                                        <div className="col-7">
                                             <h2 id="switch"> 
                                            No  <Switch onChange={toggler} />  Yes 
                                            
                                             </h2>
                                        </div>
                                        <div className="col-12">
                                        {toggle ? <Show_and_Hide/> : <span>  </span>}
                                                
                                        </div>
                                    </label>
                               </div>
                            </div>
                                
                    </div>
                    <div className="col-2 " id="images_set1">
                        <img src={IMAGES.a1} alt="" className="mt-5"/>
                        <img src={IMAGES.a1} alt="" />
                        <img src={IMAGES.a1} alt="" />
                                
                    </div>
                </div>
            
        </div>
     </>
    )
}
export default PhotoVideo_main;
