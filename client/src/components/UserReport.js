import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Импортируем Link
import axios from 'axios';
import { Typography, Button } from '@mui/material';

const UserReport = () => {
    const { id } = useParams(); // Получаем ID из URL
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
              
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [id]);

    if (loading) {
        return <Typography variant="h6">Загрузка...</Typography>;
    }

    if (!userData) {
        return <Typography variant="h6">Пользователь не найден.</Typography>;
    }

    return (
        <div>
            <Typography variant="h5">Отчет пользователя</Typography>
            <Typography variant="body1">Имя: {userData.name}</Typography>
            <Typography variant="body1">Адрес: {userData.address}</Typography>
            <Typography variant="body1">Телефон: {userData.phone}</Typography>
            <Typography variant="body1">Email: {userData.email}</Typography>
            <Typography variant="body1">Пароль: {userData.password}</Typography>
            
            {/* Кнопка "Вернуться домой" */}
            <Link to="/"> {/* Укажите маршрут, по которому хотите вернуться */}
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Вернуться домой
                </Button>
            </Link>
        </div>
    );
};

export default UserReport;
