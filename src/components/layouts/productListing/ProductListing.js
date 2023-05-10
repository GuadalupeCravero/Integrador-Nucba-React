import React from "react";
import './productListing.styles.css'
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard.js";
import { CoffeeData } from "../../../utils/CoffeeData";





const ProductListing = () => {
    return (
    
    <div className="product-list-container">
         <h2>Imported Coffees from all arond the world</h2>
     <div className="flex-container" >
        <div className="coffee-image-container">
          <img className="img-footer" src={require('../../../assets/coffee-images/coffe6.jpg')}  alt='footer' />
        </div>
      <div className="intro-detail-container">
         <h3>A SPECIALTY COFFEE</h3>
         <h4>From Brazil to Ethiopia</h4>
           <p>Without having to go far,
               Coffee Page offers a complete experience,
               made up of a gustatory and olfactory journey through the aromas of coffees from around the world</p>
          </div>
          </div>
       
        <h2>Our recommended coffee</h2>
        <div className="container">
            <div className="listing-container">
            {CoffeeData.slice(0,4).map((coffee) => (
                <ProductListingCard  key={coffee.id} coffeeData={coffee} />
            ) )}
         </div> 
    </div>

    
    </div>

    
    

    );
}

export default ProductListing;