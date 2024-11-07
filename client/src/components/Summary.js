import React from 'react';
import { Typography, Button } from '@mui/material';

const Summary = ({ formData, handleSubmit }) => {
    return (
        <div>
            <Typography variant="h5">Итог</Typography>
            <Typography variant="body1">Имя: {formData.name}</Typography>
            <Typography variant="body1">Адрес: {formData.address}</Typography>
            <Typography variant="body1">Телефон: {formData.phone}</Typography>
            <Typography variant="body1">Email: {formData.email}</Typography>
            <Typography variant="body1">Пароль: {formData.password}</Typography>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Отправить
            </Button>
        </div>
    );
};

export default Summary;
