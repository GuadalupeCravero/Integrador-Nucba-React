import React, { useContext } from "react";
import './cart-item-card.styles.css';
import { CartContext } from '../../../App';


 

const CartItemCard = ({ coffeeData }) => {

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemove = () => {
        console.log(coffeeData.id);
        setCartItems(cartItems.filter((item) => item.id !== coffeeData.id));
    }
    
    return(
             <section className="cart-item">    
                <div className="cart-item-image-container">
                  <img src={coffeeData.coffee_url} alt="cart-img"  className="cart-item-img"/>
                </div>
                <div className="cart-item-content-container">
                    <h2>{coffeeData.coffee_name}</h2>
                    <p>{coffeeData.country}</p>
                    <h3 className="cart-item-price">$ {coffeeData.price}</h3>
                    <button onClick={handleRemove} className="delete-btn">Remove from Cart</button>
                </div>
            </section>
     
        
    )
}

export default CartItemCard