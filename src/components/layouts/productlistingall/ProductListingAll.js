import React from "react";
import './productListingAll.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import {CoffeeData} from '../../../utils/CoffeeData';
 

const ProductListingAll = () => {
   
    return(
        <section>
          <div className="first-container">

            <div className="grid-container">
                {CoffeeData.map((coffee) => {
                        return(
                        <div  key={coffee.id} className="grid-item">
                        <ProductListingCard   coffeeData={coffee}/>
                    </div>
                     )
                })}
               
                
            </div>
          </div>
        </section>
    )
}

export default ProductListingAll;