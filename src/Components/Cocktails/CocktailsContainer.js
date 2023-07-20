import {useState, useEffect} from "react";
import CocktailSearchForm from "./CocktailSearchForm";
import CocktailsList from "./CocktailsList";
import ModalItem from "../../UI/ModalItem";
import { Container } from "@mui/material";
import CocktailDetails from "./CocktailDetails";
import axios from "axios";

const defaultAlert = {message: "Please, write a cocktail in the input above and press the button search", severity: "info"};

const CocktailsContainer = () => {
    const [cocktails, setCocktails] = useState([]);
    const [cocktailName, setCocktailName] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [alertContent, setAlertContent] = useState(defaultAlert);
    const [isOpen, setIsOpen] = useState(false);
    const [cocktailDetails, setCocktailDetails] = useState();

    useEffect(() => {
        if(cocktailName.length === 0) return;
        setAlertContent();
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(res => {
            const {drinks} = res.data;
            setCocktails(drinks || []);
        })
        .catch(error => {
            const {message} = error.toJSON();
            setAlertContent({message, severity: "warning"});
        })
        .finally(() => {
            setIsSearching(false);
        });
    }, [cocktailName]);

    const handleClose = () => setIsOpen(false);

    const changeCocktailName = cocktailInputName => {
        setIsSearching(true);
        setCocktailName(cocktailInputName);
    }

    const openModal = (cocktailId) => {
        const details = cocktails.filter(cocktail => cocktail.idDrink === cocktailId);
        setCocktailDetails(details[0]);
        setIsOpen(true);
    }

    return <Container fixed>
        <CocktailSearchForm isSearching={isSearching} onSearchHandler={changeCocktailName}/>
        <CocktailsList cocktails={cocktails} size={{xs: 2, md: 4, xl: 4}} isSearching={isSearching} alertContent={alertContent} onModalHandler={openModal} />
        <ModalItem isOpen={isOpen} handleClose={handleClose}>
            {cocktailDetails && <CocktailDetails details={cocktailDetails} />}
        </ModalItem> 
        
    </Container>
}

export default CocktailsContainer;