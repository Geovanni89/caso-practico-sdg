import {Button, CardActionArea, CardActions, CardContent, CardMedia, Card, Typography} from "@mui/material";


const CocktailItem = ({cocktailId, cocktailName, cocktailImg, onClick}) => {
    return <Card>
        <CardActionArea>
            <CardMedia 
                key={cocktailId}
                component="img" 
                height="200" 
                image={cocktailImg}
                alt={cocktailName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cocktailName}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" variant="contained" onClick={() => {onClick(cocktailId)}}>
                Details
            </Button>
        </CardActions>
    </Card>
}

export default CocktailItem;