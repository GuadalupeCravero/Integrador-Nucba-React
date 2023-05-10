import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import "./searchPage.styles.css";
import { CoffeeData } from "../../utils/CoffeeData";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";






const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);
   
    
    useEffect(() => {
        let searchValue = [];

        searchValue = CoffeeData.filter((data) => data.country.toLowerCase().includes(location.state.toLowerCase()));
        
        setSearchResult(searchValue);


    }, [])

    return (
        <section>
            <Navbar darkTheme={true} />
            <div className="search-result-container">
            <h1>Your Search Result</h1>
                <div className="container-primary">
                   

                    {searchResult.map((result) => (
                        <SearchResultCard key={result.id} coffeeData={result} />
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    )
}






export default SearchPage;