import React, { useState } from 'react';
import IMAGES from '../Imges/Image';
import './Homepage.css'
const Blog =()=>{

    return(
        <> 
            <div id="homepage_blog">
                <div className="container-fluid col-lg-12 " id="blog">
                    <div className="row  justify-content-around" >
                        <div className="col-lg-4 col-sm-12  mx-3 my-2" id="content" data-aos="fade-right" data-aos-duration="1000">
                                <h4> Thandunaane's Package </h4>
                                <p>
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                </p>
                        </div>
                        <div className="col-lg-4 col-sm-12 mx-2 my-2" data-aos="fade-left" data-aos-duration="1000">
                            <img className="card-img-top" src={IMAGES.a1} alt=""/>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid" id="blog2">
                    <div className="row  justify-content-around" >
                        <div className="col-lg-4 col-sm-12 mx-2 my-2" data-aos="fade-up-right" data-aos-duration="1000">
                            <img className="card-img-top" src={IMAGES.a1} alt=""/>
                        </div>
                        <div className="col-lg-4 col-sm-12  mx-3 my-2" id="content" data-aos="fade-up-left" data-aos-duration="1000">
                                <h4> Thandunaane's Plans</h4>
                                <p>
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                    Thandunane package is our planners are take to full responsiblity and Memorible of Our Wedding Event
                                </p>
                        </div>
                    </div>    
                </div>
            </div>
        </>

    );
}
export default Blog;