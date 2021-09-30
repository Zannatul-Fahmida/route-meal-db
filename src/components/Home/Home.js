import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
    return (
        <Container maxWidth="md">
        <Box sx={{ width: '100%', maxWidth: '100%', m: 4}}>
            <Typography variant="h3" gutterBottom component="div" color="secondary">
                Welcome To Meal Restaurant
            </Typography>
            <img src="https://media.istockphoto.com/vectors/summer-cafe-terrace-people-drinking-coffee-and-champagne-outside-on-a-vector-id1205900455?k=20&m=1205900455&s=612x612&w=0&h=5oDZxFbNRjcT8bXvdr9c3JcOh3nvStwoghdSvIQyA9o=" />
        </Box>
        </Container>
    );
};

export default Home;