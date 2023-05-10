import React from "react";
import { NavLink } from "react-router-dom";
import './footer.styles.css';




const Footer = () => {
    return (
       <section className="footer-container">
         <h2>Want to sell our products? Contact us</h2>
        <div className="container">
            <form className="footer-form">
                <div className="form-group">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" id="Name" className="form-input" placeholder="enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="enter your email" />
                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query</label>
                        <textarea id="query" className="form-input" placeholder="type your query"></textarea>
                    </div>
                    <div className="form-group">
                        <a href="#" className="form-submit">Submit</a>
                    </div>
                </div>
            </form>
            <NavLink className="foter-img" to="/">
            <img className="img-footer" src={require('../../../assets/coffee-images/coffe10.jpg')}  alt='footer' />
        </NavLink>
        </div>
        <p className="copy-footer">&copy; Made with love by Guadalupe Cravero. 2023 </p>
       </section>
      
    )
}

export default Footer;