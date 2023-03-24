import React  from 'react';
import IMAGES from '../../Imges/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './vendor.css';
import {Vendardata} from './Vendor_data';
import Planner_navbar from '../Planner_navbar'
const Vendorheader=()=>{
  return ( 
  <>
          {/* ---------------------------------------------------IMAGES -------------------------------------------------- */}
          <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={IMAGES.a1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.b1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.a3} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <div className="overlay1">

                    </div>
                    <div className="content1"> 
                        <h6> List of Top Vendors </h6>
                        <button id="btn"> See More</button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
      </>
  )
}

const VendorFilter =()=>{
  let types=["Vendors","Hotals & Resorts","Villas","Destinations","Small Function Halls"]
  return(
   
      <div id="vendorplanner"> 
        {/* *****************************************************SEARCH LOCATION************************************************************* */}

             <div className="row my-5" id="navbar">
                <div className="col-8" >
                    <form className="d-flex" >
                    <h4 className="text-start my-1 mx-2"><LocationOnIcon fontSize="large" id="location"/></h4>
                    <input id="search" className="form-control" type="search" placeholder="Search Location" aria-label="Search" autoComplete="off"/>
                    <button className="btn btn-success" type="submit" id="btn">Search</button>
                    </form>
                </div>
                <div className="col-4">
                
                </div>
            </div>

            {/* ******************************************************  vENDOR FILTER ************************************************************* */}
        <div className="row border border-info px-2 my-5">
              <div className="row" id="vendor_types">
                    <div className="col-3"> 
                      <h5 id="title" className="">Types</h5>

                    </div>
                    <div className="col-9">                                    
                            {types.map((categrory, idx) =>
                            (
                                  <button className="my-4 mx-2" id="type_btn"> {categrory}  </button>
                            ))}
                    </div>
              </div>
                <div className="col-md-3 col-xs-12" id="vendor_filter">
                      <div className="container-fluid ">
                           
                              <div id="pricefilter" className="col-sm-4 col-md-12">
                                <h5 id="title">Price</h5>
                                  <ul className="" id="price">
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 5K to 15K</li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 16k to 30K </li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 30K to 60K </li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 60K to 100K </li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> Above 100K</li>
                                    </ul>
                                    <hr/>
                              </div>
                              <div id="capacityfilter" className="col-sm-4 col-md-12">
                                <h5 id="title">Capacity</h5>
                                  <ul className="" id="capacity">
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> Lessthen 500</li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 600 to 750 </li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 800 to 1000 </li>
                                      <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> Morethen 1000 </li>
                                  </ul>
                                <hr/>
                              </div>
                          </div>
                  </div>
{/* *********************************************************         PRODUCTS DETAILS  SHOW CARD       ************************************ */}
                  <div className="col-md-9 col-xs-12">
                        <div className="row" id="vendorcard">
                              {Vendardata.map((item)=>(         
                                    <div className="col-xs-6 col-sm-6 col-xl-4 my-1">
                                        <div className="card">
                                            <img src={item.img1} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-address"> {item.address}</p>
                                                <div className=" justify-content-between">
                                                      <button className=" align-self-end">Booking Now</button>
                                                      <p id="vendorprice"className=" text-end mt-2 mx-2"><span>&#8377;</span>{item.price} </p>
                                                </div>
                                            </div>
                                         </div>
                                      </div>
                                ))}
                         </div> 
                    </div>
                    

         
          </div>                         
     
      </div> 
  



  );
}
const Vendor_main=()=>
{
    return (

     <div id="vendor_planner">
       <Vendorheader/>  
       <VendorFilter/>
     </div>
                
 
    )
}
export default Vendor_main;
