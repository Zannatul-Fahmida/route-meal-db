import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meal = props => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
    const history = useHistory();
    const url = `/meal/${idMeal}`;
    const handleMealDetails = () =>{
        history.push(url);
    }
    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 250)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={url} style={{textDecoration: "none", padding: "10px"}}>Order Now</Link>
                    <Button onClick={handleMealDetails} size="small">Learn More</Button>
                </CardActions>
            </Card>
    );
};

export default Meal;