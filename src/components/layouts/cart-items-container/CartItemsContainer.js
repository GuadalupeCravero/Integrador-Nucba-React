import React, {useContext} from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from "../../../App";

 

const CartItemsContainer = () => {
 const { cartItems, totalAmount } = useContext(CartContext);
 


    return(
        <section className="cart-items-container">
        <div className="continer">
          {totalAmount === 0 ? (
            <h2>Currently your cart is empty</h2>

          ):(
            <React.Fragment>
                  <h2>Cart</h2>
        {cartItems.map((item) => (
            <CartItemCard key={item.id}  coffeeData={item} />
        ))}

        <h3>Subtotal: ${totalAmount} </h3>
        <button className="button-primary">Checkout</button>

            </React.Fragment>
          )}
        </div>
        </section>
    )
}

export default CartItemsContainer;