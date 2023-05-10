import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import './searchResultCard.styles.css';


 

const SearchResultCard = ({ coffeeData }) => {

  


    return(
             <section className="cart-item">    
                <div className="cart-item-image-container">
                  <img src={coffeeData.coffee_url} alt="cart-img"  className="cart-item-img"/>
                </div>
                <div className="cart-item-content-container">
                    <h2>{coffeeData.coffee_name}</h2>
                    <p>{coffeeData.country}</p>
                   <Link to={`/coffee-details/${coffeeData.id}`} className="button-detail">Details</Link>
        
                </div>
            </section>
     
        
    )
}

export default SearchResultCard;