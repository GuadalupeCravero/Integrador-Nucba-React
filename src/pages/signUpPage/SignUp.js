import React from "react";
import './signUp.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from "../../components/form/authForm/AuthForm";





const SignUp = () => {
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
                    <h2>Sign up</h2>
                    <p>Create a new account with email and password.</p>
                    <AuthForm  buttonName="Sign Up"/>
                
                </div>
                </div>
            </div>
        </section>
        </React.Fragment>
      
  
    );
  }
  
  export default SignUp;