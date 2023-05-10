import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import SearchInputForm from '../../components/form/searchInputForm/SearchInputForm';
import './coffeePage.styles.css'
import ProductListingAll from "../../components/layouts/productlistingall/ProductListingAll";
import Footer from '../../components/layouts/footer/Footer';








const CoffeePage = () => {
    return(
        <section>
           <Navbar darkTheme={ true } />

           <div className="search-container">
            <h2>Find the coffee that you <span className="text-primary">love</span></h2>
            <SearchInputForm darkTheme={ false }/>

           </div>
           <ProductListingAll />
           <Footer />
        </section>
    )
}

export default CoffeePage;