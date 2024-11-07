import React from 'react';
import StepForm from '../components/StepForm';
import { Container } from '@mui/material';

const HomePage = () => {
    return (
        <Container>
            <h1>Пошаговая форма</h1>
            <StepForm />
        </Container>
    );
};

export default HomePage;
