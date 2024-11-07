import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    background-color: #f5f5f5; /* Light grey background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px; /* Optional: limits the width */
    margin: auto; /* Center the component */
`;

const StyledButton = styled(Button)`
    margin-top: 15px;
`;

const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
    const initialValues = { email: formData.email, password: '', confirmPassword: '' };

    const validationSchema = Yup.object({
        email: Yup.string().email('Неверный адрес электронной почты').required('Email обязателен'),
        password: Yup.string().required('Пароль обязателен').min(6, 'Пароль должен содержать не менее 6 символов'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать').required('Подтверждение пароля обязательно'),
    });

    const handleSubmit = (values) => {
        handleChange(values);
        nextStep();
    };

    return (
        <Container>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <Typography variant="h6" align="center">Шаг 2: Введите ваш Email и пароль</Typography>
                        <Field
                            name="email"
                            as={TextField}
                            label="Ваш Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="email" />}
                        />
                        <Field
                            name="password"
                            as={TextField}
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="password" />}
                        />
                        <Field
                            name="confirmPassword"
                            as={TextField}
                            label="Подтверждение пароля"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="confirmPassword" />}
                        />
                        <StyledButton variant="contained" color="secondary" onClick={prevStep}>Назад</StyledButton>
                        <StyledButton type="submit" variant="contained" color="primary">Далее</StyledButton>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default StepTwo;
