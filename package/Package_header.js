import React,{useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import IMAGES from '../Imges/Image';
import './package.css'
import {Link} from 'react-router-dom';
const styles={

  menu:{
      color: '#2b8b0e',
      fontSize: '20px',
      fontWeight:'bold'
  }

}
const Package_header=()=>{
  const [navbar,SetNavbar]=useState(false);
  const changBg1=()=>{
    if(window.scrollY>=25){
      SetNavbar(true);
    }else{
      SetNavbar(false);
    }
  };
  window.addEventListener("scroll",changBg1);
  return(
        <>   
        {/* ---------------------------------------NavBar------------------------------------ */}
        <nav className={navbar ? "navbar package_scroll navbar-expand-sm  fixed-top" : "navbar navbar-expand-sm fixed-top"} id="package_navbar"> 
            <div className="container-fluid">
            <a className="navbar-brand" href="#">BooKing</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                          <Link to="/">
                                 <a className="nav-link" aria-current="page" style={styles.menu}>Home </a>
                            </Link>
                        </li>  
                        <li className="nav-item">
                            <Link to="/Freelance">                      
                                <a className="nav-link"  aria-current="page" style={styles.menu}>Freelencers</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>


            {/* ----------------------------------------- Image  ----------------------------------------- */}
        
                <div className="package_header">  
                    <div className="img"> 
                        <div>
                          <img src={IMAGES.a1} alt="" />
                        </div>
                        <div className="overlay">  </div>
                        
                    </div>
                    <div className="content"> 
                        <h6> package</h6>
                        <button className="btn"> ReadMore</button>
                    </div>
                </div>

                {/* **********************************  FORM  ******************************************** */}
                <div>
                  form 
                </div>
                <div className="container-fluid " id="pagination">
                      <div id="prev"> 
                            <button className="btn"> Previous   </button>
                      </div>
                      <div id="next">
                          <Link to="/package/vendor">
                                <button className="btn"> Next</button>
                          </Link>
                      </div>
                </div>
                  
            </>
    );
}
export default Package_header;
