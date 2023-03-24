import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Package from './package/Package';
import Planpackage from './Planners/Planpackage';
import Package_Vendor from './package/Vendor';
import Package_Catering from './package/Catering';
import Package_Boutique from './package/Boutique';
import Package_Mehandi from './package/Mehandi';
import Package_Beautician from './package/Beautician';
import Package_Invitations from './package/Invitation';
import Package_photo_video from './package/Photo_video_graphers';
import MenuItems from './Planners/Cateting/Menu_items';

import Vendor from './Planners/Vendor/Vendor';
import Catering from './Planners/Cateting/Catering';
import Boutique from './Planners/Boutique/Boutique';
import Mehandi from './Planners/Mehandi/Mehandi';
import Beautician from './Planners/Beautician/Beautician';
import Invitation from './Planners/Invitation/Invitation';
import Photo_video_grapher from './Planners/Photo_Video_grapher/Photo_Video_grapher';

import Freelance_Homepage from './Freelancer/Freelance_Homepage';

import AOS from "aos";
import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';

AOS.init();

function App() {
    return (   
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/package" element={<Package/>}/>
                <Route path="/planpackage" element={<Planpackage/>}/>
              
                <Route path="/package/vendor"  element={<Package_Vendor/>}/>
                <Route path="/package/catering"  element={<Package_Catering/>}/>
                  <Route path="/package/catering/menu_items"  element={<MenuItems/>}/>

                <Route path="/package/boutique"  element={<Package_Boutique/>}/>
                <Route path="/package/mehandi"  element={<Package_Mehandi/>}/>
                <Route path="/package/beautician"  element={<Package_Beautician/>}/>
                <Route path="/package/invitation"  element={<Package_Invitations/>}/>
                <Route path="/package/photo_video_graphers"  element={<Package_photo_video/>}/>

                <Route path="/planpackage/vendors" element={<Vendor/>}/>
                <Route path="/planpackage/catering" element={<Catering/>}/>
                <Route path="/planpackage/boutique" element={<Boutique/>}/>
                <Route path="/planpackage/mehandi" element={<Mehandi/>}/>
                <Route path="/planpackage/beautician" element={<Beautician/>}/>
                <Route path="/planpackage/invitation" element={<Invitation/>}/>
                <Route path="/planpackage/photo_video_graphers" element={<Photo_video_grapher/>}/>

                <Route path="freelance" element={<Freelance_Homepage/>}/>
            </Routes>
        </Router>
          {/* <Homepage/>  
          <Package/>
          <Planpackage/> */}
      </div>

    );
}

export default App;
