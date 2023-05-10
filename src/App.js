import React, { useState, useEffect, createContext } from "react";
import {Routes, Route} from 'react-router-dom';
import app from './firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomePage from './pages/homepage/HomePage';
import CoffeePage from "./pages/CoffeePage/CoffeePage";
import CartPage from "./pages/cartpage/CartPage";
import CoffeeDetails from "./pages/CoffeeDetailsPage/CoffeeDetails";
import Login from './pages/loginPage/Login';
import SignUp from './pages/signUpPage/SignUp';
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";


export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const auth = getAuth(app);

  const [autheticatedUser, setAutheticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState();



  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
      if(user) {
        setAutheticatedUser(user);
      } else {
        setAutheticatedUser(null)
      }

    })

  },[])

   useEffect(() => {
      
     let total = 0;
     cartItems.forEach((item) => {
      total = total + parseInt(item.price);
     })

     setTotalAmount(total);
      },[cartItems])


  return (
    <ScrollToTop>

      <UserContext.Provider value = {autheticatedUser}>
         <CartContext.Provider value={{cartItems, totalAmount, setCartItems}}>
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coffee" element={<CoffeePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/coffee-details/:id" element={<CoffeeDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
     
    </CartContext.Provider>
    </UserContext.Provider>
    </ScrollToTop>


  );
}

export default App;
