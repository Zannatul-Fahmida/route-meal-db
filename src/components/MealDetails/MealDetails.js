import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, []);
    const handleClick = () => {
        history.push('/restaurant');
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1
        }}>
            {
                meal.map(item => <Card key={item.strId} sx={{ maxWidth: '50%' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image={item.strMealThumb}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.strMeal}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.strInstructions}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleClick} size="small">Back To Menu</Button>
                    </CardActions>
                </Card>)
            }
        </Box>
    );
};

export default MealDetails;