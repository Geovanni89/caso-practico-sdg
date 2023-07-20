import axios from "axios";
import { useState, useEffect } from "react";
import CocktailsList from "../Cocktails/CocktailsList";

const CocktailsByCategory = ({category, onModalHandler}) => {
    
    const [cocktails, setCocktails] = useState([]);

    const modalHandler = async (cocktailId) => {
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(resp => {
            const {drinks} = resp.data;
            onModalHandler(drinks[0]);
        })
        .catch(error => {console.log(error)});        
    }

    useEffect(() => {
        if(!category) return;
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(resp => setCocktails(resp.data.drinks.slice(0,4) || []));
    }, [category]);

    return <CocktailsList cocktails={cocktails} size={{xs: 2, md: 3, xl: 3}} onModalHandler={modalHandler}/>
}

export default CocktailsByCategory;