import React from "react";
import './showcase.styles.css'
// import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import SearchInputForm from "../../form/searchInputForm/SearchInputForm";


const Showcase = () => {
    return (
       <section className="showcase-container">
        {/* <Navbar /> */}
        <NavLink></NavLink>
        <div className="overlay"></div>
        <div className="showcase-content">
        <h1>Bold coffee for a bold start</h1>
        <p>Explore all our products</p>
        <SearchInputForm darkTheme={ true }/>
        </div>


       </section>
    );
}

export default Showcase;
