import React , { useContext } from "react";
import './navbar.styles.css'
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import {ReactComponent as Cart} from '../../../assets/cart.svg';
import { getAuth, signOut } from "firebase/auth";
import  app  from '../../../firebase/Firebase';


const Navbar = ({darkTheme}) => {


 const user = useContext(UserContext);

 const auth = getAuth(app);
 const navigate = useNavigate();

 const handleLogout = () => {
    signOut(auth).then(() => {
        navigate('/');
    })
    .catch((err) => {
        console.log(err);
    })
 }





 const showLoginandSignUp = (
    <nav className="nav-links-container">
            
    <Link to="/" className="nav-links"> Home</Link>
    <Link to="/Coffee" className="nav-links">Brew Collection</Link> 
    <Link to="/Login" className="nav-links">Login</Link>
    <Link to="/signup" className="nav-links">Sign up</Link> 
</nav>

 )


 const showLogoutAndCart = (
    <nav className="nav-links-container">
            
    <Link to="/" className="nav-links"> Home</Link>
    <Link to="/Coffee" className="nav-links"> Brew Collection</Link> 
    <a onClick={handleLogout} to="/" className="nav-links">Logout</a>
    <Link to ="/cart"> <Cart className="cart-link" /> </Link>
    
</nav>

 )

    return (
       <section className={`navbar-container ${ darkTheme ? 'background-dark relative' : 'background-trasparent'}`}>
        <div className="container">
        <NavLink className="nav-logo" to="/">
            <img src={require('../navbar/logo.png')}  alt='logo' />
        </NavLink>
       {user ? showLogoutAndCart : showLoginandSignUp }
        </div>
    
       </section>
      
    )
}

export default Navbar;