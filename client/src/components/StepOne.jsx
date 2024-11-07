import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import styled from 'styled-components';

// Стили для контейнера формы
const FormContainer = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto; /* Центрируем форму */
`;

const StepOne = ({ nextStep, handleChange, formData }) => {
    const initialValues = { name: formData.name, address: formData.address, phone: formData.phone };

    const validationSchema = Yup.object({
        name: Yup.string().required('Имя обязательно'),
        address: Yup.string().required('Адрес обязателен'),
        phone: Yup.string().required('Телефон обязателен').matches(/^[0-9]{10}$/, 'Телефон должен состоять из 10 цифр'),
    });

    const handleSubmit = (values) => {
        handleChange(values);
        nextStep();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {() => (
                <Form>
                    <FormContainer>
                        <Typography variant="h6" align="center" gutterBottom>
                            Шаг 1: Введите ваши данные
                        </Typography>
                        <Field
                            name="name"
                            as={TextField}
                            label="Ваше имя"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="name" />}
                        />
                        <Field
                            name="address"
                            as={TextField}
                            label="Ваш адрес"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="address" />}
                        />
                        <Field
                            name="phone"
                            as={TextField}
                            label="Ваш телефон"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="phone" />}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Далее
                        </Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
};

export default StepOne;
