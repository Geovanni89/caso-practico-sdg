import React, {useState} from "react";
import {Button, TextField, Box, Grid, Paper} from "@mui/material";

const CocktailSearchForm = ({isSearching, onSearchHandler}) => {
    const [cocktailName, setCocktailName] = useState("");

    const searchCocktailsHandler = () => {
        onSearchHandler(cocktailName);
    }

    const onChangeHandler = (event) => {
        setCocktailName(event.target.value);
    }

    return <Box
        component="form" 
        sx={{'& .MuiTextField-root': {m:1, width: '25ch'}}} 
        noValidate 
        autoComplete="off"
    >
        <Paper sx={{margin: 12}} elevation={10}>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xl={8} md={8}>
                    <TextField required id="cocktail-input" label="Cocktails" variant="outlined" value={cocktailName} onChange={onChangeHandler}/>
                </Grid>
                <Grid item xl={3} md={3}>
                    <Button variant="contained" onClick={searchCocktailsHandler} disabled={isSearching}>Search</Button>
                </Grid>
            </Grid>
        </Paper>
    </Box>;
}

export default CocktailSearchForm;