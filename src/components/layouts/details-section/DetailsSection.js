import React, { useEffect, useState, useContext } from "react";
import './detailsSection.styles.css';
import { useParams, useNavigate } from "react-router-dom";
import { CoffeeData } from '../../../utils/CoffeeData';
import { CartContext, UserContext } from "../../../App";
import ScrollToTop from "../../util/ScrollToTop";



const DetailsSection = () => {
    const { id } = useParams();
    const [coffeeData, setCoffeeData] = useState({});


    const user = useContext(UserContext);
    const {cartItems, setCartItems} = useContext(CartContext);
    const navigate = useNavigate();

   useEffect(() =>{
    let newData = CoffeeData.filter((coffee) => coffee.id === parseInt(id));
    setCoffeeData(newData[0])
    
   },[])


   const handleAddToCart = () => {
    if(user) {
        //cart
        setCartItems([...cartItems, coffeeData]);
        alert(`The coffee ${coffeeData.coffee_name} is added to the cart`);
    } else {
         navigate('/login');
         alert("Please Login or Sign up first.")
    }
   }


    return(
        <ScrollToTop>
        <section className="detail-section-container">
            <div className="firt-container">
                <div className="flex-container">
                  <div className="coffee-image-container">
                  <img src={coffeeData.coffee_url} alt="img" />
                  </div>
                    <div className="coffee-detail-container">
                            <h2>{coffeeData.coffee_name}</h2>
                            <p className="text-primary">{coffeeData.country}</p>
                            <p><b>Flavour Notes: </b> {coffeeData.flavour_notes}</p>
                            <p className="coffee-description">
                            {coffeeData.coffee_description}
                             </p>
        
                            <h3>${coffeeData.price}</h3>
                            <a onClick={handleAddToCart} className="button-primary">Add to cart</a>

                        </div>
                </div>
            </div>
        </section>
        </ScrollToTop>
    )
}

export default DetailsSection;