import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const handleTextField = e => {
        const textFieldValue = e.target.value;
        setSearchText(textFieldValue);
    }
    return (
        <div>
            <Container maxWidth="md">
                <TextField fullWidth label="Search foods here" onChange={handleTextField} color="secondary" style={{margin: "30px"}} />
            </Container>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        meals.map(meal => <Grid item xs={8} sm={4} md={4}>
                            <Meal
                            key={meal.idMeal}
                            meal={meal}
                        ></Meal>
                        </Grid>)
                    }
                </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default Restaurant;