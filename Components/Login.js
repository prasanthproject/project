import React,{useState} from 'react';
import {useFormik} from 'formik';
// import CloseIcon from '@mui/icons-material/Close';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import  Login_Form from './Login_Form';
import './login.css'
const validate =values=>{
    const errors={};
    if(!values.firstname){
        errors.firstname="*Requied";
    }else if( values.firstname.length>8){
        errors.firstname="Must be 8 characters or Less";
    }
    if(!values.lastname){
        errors.lastname="*Requied";
    }else if( values.lastname.length>8){
        errors.lastname="Must be 8 characters or Less";
    }
    if(!values.email){
        errors.email="*Requied";
    }else if( !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
          errors.email="*Invaild Email Address";  
    }
    if(!values.password){
        errors.password="*Required";
    }else if(values.password.length>8){
        errors.password="* Maximum 8 Characters";
    }else if(values.password.length<4){
        errors.password="* Miniimum 4 Characters";
    }
    if(!values.confirmpassword){
        errors.confirmpassword="*Required";
    }else if(values.password !== values.confirmpassword){
            errors.confirmpassword="* Password must match"
    }
    return errors;
}

// const loginvalidate =loginvalues=>{
//     const loginerrors={};
//     if(!loginvalues.email)
//     {
//         loginerrors.email="*Requied";
//     }
//     else if( !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(loginvalues.email))
//     {
//         loginerrors.email="*Invaild Email Address";  
//     }
  
//     if(!loginvalues.password){
//         loginerrors.password="*Required";
//     }else if(loginvalues.password.length>8){
//         loginerrors.password="* Maximum 8 Characters";
//     }else if(loginvalues.password.length<4){
//         loginerrors.password="* Miniimum 4 Characters";
//     }
//     return loginerrors;
// }
const Login=()=>{

    const [loginState ,setloginState]=useState(0);
    const loginmenuTab=(index)=>{   
        setloginState(index);
    }
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = () => {
      setIsSHown((isShown) => !isShown);
    };
  
    const [bool,setbool]=useState(0);
    const formik =useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
        
        },
        validate,

        onSubmit: (values,{resetForm}) => {
            if(bool){
                setbool(0);
                resetForm({values:''})
            }else{   
                setbool(1);
                console.log(values);
            }
        },
    });
    return(
      <>
      <div className="container mt-5">
      <Link to="/"> <button className="" id="backto"> Back </button>  </Link>
      </div>
      <div className="container mt-2" id="login_menubar">
            <ul className="nav nav-pills justify-content-around  ">
                <li className="nav-item col-12 col-md-5 mx-1 my-2">
                    <a id="nav-link" className={loginState === 1 ? "nav-link active":"nav-link"} data-toggle="pill" href="#login" onClick={()=>loginmenuTab(1)}>Login  </a>
                </li>
                <li className="nav-item col-12 col-md-5 mx-1 my-2">
                    <a id="nav-link" className={loginState === 2 ? "nav-link active":"nav-link"} data-toggle="pill" href="#register" onClick={()=>loginmenuTab(2)}>Register</a>
                </li>
                
            </ul>
            <div className="tab-content" >
                <div id="login"  className={loginState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>                                
                                              
                    <Login_Form/>
                </div>

                <div id="register"  className={loginState === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                    <div className="container" id="register_form">
                        <div className="card col-12 col-md-8 col-lg-5 mt-4 mx-auto">
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <input id="firstname" className= { formik.touched.firstname && formik.errors.firstname ?"form-control my-1": "form-control my-2"} type="text" name="firstname" placeholder="firstname" autoComplete="off" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} style={{ border: formik.touched.firstname && formik.errors.firstname ? '2px red solid' : null}} />
                                    {
                                        formik.touched.firstname && formik.errors.firstname ? <span id="required">{formik.errors.firstname}</span> : null
                                    }
                                    <input id="lastname" className={formik.errors.lastname ?"form-control my-1": "form-control my-2"} type="text" name="lastname" placeholder="lastname" autoComplete="off" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} style={{ border: formik.touched.lastname && formik.errors.lastname ? '2px red solid' : null}}/>
                                    {
                                        formik.touched.lastname && formik.errors.lastname ? <span id="required">{formik.errors.lastname}</span> : null
                                    }
                                    <input id="email" className={formik.touched.email && formik.errors.email ?"form-control my-1": "form-control my-2"} type="text" name="email" placeholder="abcd@gmail.com" autoComplete="off" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} style={{ border: formik.touched.email && formik.errors.email ? '2px red solid' : null}}/>
                                    {
                                        formik.touched.email && formik.errors.email ? <span id="required">{formik.errors.email}</span> : null
                                    }
                                    <input id="password" className={formik.touched.password && formik.errors.password ?"form-control my-1": "form-control my-2"}  type={isShown ? "text" : "password"} name="password" placeholder="Password" autoComplete="off" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} style={{ border:formik.touched.password && formik.errors.password ? '2px red solid' : null}}/>
                                    {
                                        formik.touched.password && formik.errors.password ? <span id="required">{formik.errors.password }</span> : null
                                    }
                                    <input id="c-password" className={formik.touched.confirmpassword && formik.errors.confirmpassword ?"form-control my-1": "form-control my-2"}  type={isShown ? "text" : "password"} name="confirmpassword" placeholder="confirm password"  autoComplete="off" onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} style={{ border:formik.touched.confirmpassword && formik.errors.confirmpassword ? '2px red solid' : null}}/>
                                    {
                                            formik.touched.confirmpassword && formik.errors.confirmpassword ? <span id="required">{formik.errors.confirmpassword } <br/></span> : null
                                    }
                                    <label><input className="my-1 pb-1 mx-1" type="checkbox" id="showpassword" onChange={togglePassword} checked={isShown}  /><span className="my-1 mx-2">  show password </span> </label>
                                    
                                    <input type="submit" value="REGISTER" className="mt-5 mx-4" id="register_btn"/>
                                </form>
                            </div>
                            <label  id="register_footer" className="text-center mb-2">  Already have account <a href="#" className="text-primary" >Login here...</a> </label>
                        </div>
                        <div className="message_box">
                            {
                                bool?(<Popup onClick={formik.handleSubmit}/>):null
                            } 

                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  );
}
export default Login;

class Popup extends React.Component{
    render(){
        return(
            <div className="Popup">
                <div className="Popup_inner">
                      <h1 className="close" onClick={this.props.onClick}> <CloseRoundedIcon/></h1>
                      <br/>
                      <br/>
                      <div className="text-center">
                          <span className="tick">&#10003;</span>
                      </div>  
                      <h2 className="text2"> You have Successfully Signed Up!</h2>
                </div>
            </div>
        )
    }
}