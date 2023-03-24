import React,{useState} from 'react';
import './Invitation.css';
import Planner_navbar from '../Planner_navbar';
import IMAGES from '../../Imges/Image'
import {invitation_card} from './Invitation_data'

const Invitation=()=>{
    const [noOfinvitations,setOfInvitation]=useState(6);
    const slice=invitation_card.slice(0,noOfinvitations);
    const loadmore=()=>{
        setOfInvitation(noOfinvitations+2)
    } 
    let invitation_type=["Invitation 1","Invitation 2","Invitation 3","Invitation 4","Invitation 5","Invitation 6"]
    return(
  <div className="" id="Invitation_plan">
        <div className="row" id="invitation_categroies">
          <div className="col-xl-2" id="categroies_head">
              <p>Categroies</p>
          </div>
            <div className="col-xl-10 col-sm-12" id="invite_type">              
                {invitation_type.map((categrory, idx) =>
                (
                      <button className="my-4 mx-2" id="type_btn"> {categrory}  </button>
                ))}
            </div>
        </div>

      <div className="row">
              <div className="col-xl-2 col-12" id="invitation_filter">       
                    <div id="pricefilter" className="col-sm-4 col-md-12">
                      <h5 id="title">Price</h5>
                        <ul className="" id="price">
                            <li className=""><input className="form-check-input"  type="checkbox" value="" aria-label="..."/> below <span>&#8377;</span>20 </li>
                            <li className=""><input className="form-check-input"  type="checkbox" value="" aria-label="..."/> <span>&#8377;</span>20 to <span>&#8377;</span>30  </li>
                            <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> <span>&#8377;</span>30 to <span>&#8377;</span>50 </li>
                            <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> <span>&#8377;</span>50 to <span>&#8377;</span>100 </li>
                            <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> Above <span>&#8377;</span>100</li>
                          </ul>
                          <hr/>
                    </div>
               </div>

                  <div className="col-xl-10 col-md-12 col-12" id="body">
                    <div className="row" id="invitation_card">
                        {slice.map((item)=>(
                          <div className="col-xl-4 col-md-4 col-sm-6 col-12" id="container">
                              <div id="Invitation_Card">
                                <div id="imgSx">
                                      <img src={IMAGES.m6} alt="" />
                                </div>
                                <div id="content">
                                    <p id="title"> Invitations </p>
                                    <p id="price"> <span>&#8377;</span>500 </p>
                                    <button id="btn">Booking Now </button>
                                </div>
                              </div>
                          </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="col-6 my-5" id="invitation_Loadmore" onClick={()=>loadmore()}> Load More...</button>
                    </div>
                  </div>
      </div>
  </div>
    )
}
export default Invitation;