import { Grid, Button, Paper, Box, Autocomplete, TextField } from "@mui/material";

const CategoriesSearchform = ({categories, categoryChangeHandler}) => {

    const options = categories.map(category => category.strCategory);

    const printvalue = (value) => {
        console.log(value);
    }
    

    return <Box
        component="form" 
        sx={{'& .MuiTextField-root': {m:1, width: '50ch'}}} 
        noValidate 
        autoComplete="off"
    >
        <Paper sx={{margin: 12}} elevation={10}>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xl={8} md={8}>
                    <Autocomplete
                        fullWidth
                        onChange={(event, newValue) => {
                            categoryChangeHandler(newValue);
                        }} 
                        blurOnSelect 
                        id="category-selector" 
                        options={options} 
                        sx={{width: 500}} 
                        renderInput={(params) => (
                            <TextField {...params} label="Categories" variant="standard" />
                        )}
                    />
                </Grid>
            </Grid>
        </Paper>
    </Box>
}

export default CategoriesSearchform;