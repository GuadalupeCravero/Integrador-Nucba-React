import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';


const ProductListingCard = ({ coffeeData }) => {
    return (

        <div className="product-listing-card">
        <div className="product-listing-img-container">
                <img src={coffeeData.coffee_url} alt="product-listing-img"  className="product-listing-image"/>
                </div>
           

         <div className="product-listing-detail-container">
            <h3>{coffeeData.coffee_name}</h3>
            <p className="country-list">{coffeeData.country}</p>
            <p className="price-list">${coffeeData.price}</p>
             </div>
             <div className="card-btn-container">
             <Link to={`/coffee-details/${coffeeData.id}`} className="btn-list">Details</Link>
             </div>
            
        </div>







        );
    }
    
    export default ProductListingCard;