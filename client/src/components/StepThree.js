import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import Summary from './Summary';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    background-color: #f9f9f9; /* Light background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px; /* Optional: limits the width */
    margin: auto; /* Center the component */
`;

const StyledButton = styled(Button)`
    margin-top: 15px;
    width: 100%; /* Full width for better usability */
`;

const StepThree = ({ prevStep, formData }) => {
    const [submitted, setSubmitted] = useState(false);
    const [report, setReport] = useState(null);
    const navigate = useNavigate(); // Используем useNavigate вместо useHistory

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, formData);
            setReport(response.data); // Сохраняем данные пользователя
            setSubmitted(true);
                  // Очистка данных в localStorage после успешной отправки
        localStorage.removeItem('formData');
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.");
        }
    };

    if (submitted) {
        return (
            <Container>
                <Typography variant="h6" align="center">Данные успешно отправлены!</Typography>
                <Typography variant="body1" align="center">Ссылка на отчет:</Typography>
                {report && (
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`/report/${report.id}`)} // Используем ID, полученный от сервера
                    >
                        Посмотреть отчет
                    </StyledButton>
                )}
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h6" align="center">Шаг 3: Подтверждение</Typography>
            <Summary formData={formData} handleSubmit={handleSubmit} />
            <StyledButton variant="contained" color="secondary" onClick={prevStep}>Назад</StyledButton>
        </Container>
    );
};

export default StepThree;
