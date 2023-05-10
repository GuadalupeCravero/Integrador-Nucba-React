import React from "react";
import ProductListing from "../../components/layouts/productListing/ProductListing";
import Showcase from "../../components/layouts/showcase/Showcase";
import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";






const HomePage = () => {
    return (
       <section>
        <Showcase />
        <ProductListing />
        <Footer />
        <Navbar/>
        
       

       </section>
    );
}

export default HomePage;