import React from "react";
import './login.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from "../../components/form/authForm/AuthForm";
import { Link } from 'react-router-dom';



const Login = () => {
    return (
  
      <React.Fragment>
      <Navbar  darkTheme={true}/>
      <section className="signup-container">
          <div className="signup-img-container">
              <img src={AuthBgImg} alt="background" />

          </div>
          <div className="signup-content-container">
              <div className="container">
              <div className="content-wrapper">
                  <h2>Login</h2>
                  <p>Sing in with email and password.</p>
                  <AuthForm buttonName="Login" />
                  <Link to="/SignUp" className="link-sign"> Still not sign up? Click here </Link> 
              </div>
              </div>
          </div>
      </section>
      </React.Fragment>
    
  
    );
  }
  
  export default Login;