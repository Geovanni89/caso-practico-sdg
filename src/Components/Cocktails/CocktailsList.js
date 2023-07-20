import AlertItem from "../../UI/AlertItem";
import CocktailItem from "./CocktailItem";
import { Grid, Box, CircularProgress} from "@mui/material";

const CocktailsList = ({cocktails, size, isSearching, alertContent, onModalHandler}) => {
    
    const displayedCocktails = cocktails.map(cocktail => {
        const {strDrink, strDrinkThumb, idDrink} = cocktail;
        return <Grid item md={size.md} xs={size.xs} xl={size.xl} key={idDrink}>
            <CocktailItem cocktailName={strDrink} cocktailImg={strDrinkThumb} cocktailId={idDrink} onClick={onModalHandler} />
        </Grid>;
        
    });

    if(isSearching) return <CircularProgress />

    if(alertContent) return <AlertItem alertContent={alertContent} />

    return <Box flexGrow={1}>
        <Grid container alignItems="center" spacing={3}>
            {displayedCocktails}
        </Grid>
    </Box>

    
    
}

export default CocktailsList;