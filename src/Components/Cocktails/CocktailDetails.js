import {CardActionArea, CardContent, CardMedia, Card, Typography} from "@mui/material";

const CocktailDetails = ({details}) => {
    console.log(details);
    const {
        strDrink: cocktailName, 
        strDrinkThumb: thumb,
        strCategory: category,
        strIngredient1: ingredient1,
        strIngredient2: ingredient2,
        strIngredient3: ingredient3,
        strIngredient4: ingredient4,
        strInstructions: instructions,
        strMeasure1: measure1,
        strMeasure2: measure2,
        strMeasure3: measure3,
        strMeasure4: measure4,
        strGlass: glass
    } = details;

    

    return <Card>
        <CardActionArea>
            <CardMedia 
                component="img" 
                height="350" 
                image={thumb}
                alt={cocktailName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {`${cocktailName} - (${glass})`} </Typography>
                <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
        {`Category: ${category}`}
      </Typography>
      
      <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
        {`Instructions: ${instructions}`}
      </Typography>
      <Typography variant="body2">
        Ingredients:
        <br />
        <ul>
            <li>{ingredient1} - {measure1}</li>
            <li>{ingredient2} - {measure2}</li>
            <li>{ingredient3} - {measure3}</li>
            <li>{ingredient4} - {measure4}</li>
        </ul>
      </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default CocktailDetails;