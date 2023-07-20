import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import CategoriesSearchform from "./CategoriesSearchForm";
import CocktailsbyCategory from "./CocktailsByCategory";
import CocktailDetails from "../Cocktails/CocktailDetails";
import ModalItem from "../../UI/ModalItem";

const CategoriesContainer = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [cocktailDetails, setCocktailDetails] = useState();

    const categoryChange = (selected) => {
        setCategory(selected);
    }

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(resp => {
            const {drinks} = resp.data;
            setCategories(drinks);
        })
        .catch(error => {console.log(error)});

    },[]);

    const handleClose = () => setIsOpen(false);

    const openModal = (details) => {
        setCocktailDetails(details);
        setIsOpen(true);
    }

    return <Container>
        <CategoriesSearchform categories={categories} categoryChangeHandler={categoryChange}/>
        <CocktailsbyCategory category={category} onModalHandler={openModal}/>
        <ModalItem isOpen={isOpen} handleClose={handleClose}>
            {cocktailDetails && <CocktailDetails details={cocktailDetails} />}
        </ModalItem> 
    </Container>
}

export default CategoriesContainer;