import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ProgressBar from './ProgressBar';
import { Container } from '@mui/material';

const StepForm = () => {
    // Инициализируем состояние formData, извлекая данные из localStorage
    const [formData, setFormData] = useState(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
            name: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirmPassword: '',
        };
    });

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (data) => {
        const updatedFormData = { ...formData, ...data };
        setFormData(updatedFormData);
        // Сохраняем обновленные данные формы в localStorage
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        console.log('Saved to localStorage:', updatedFormData); // Для проверки
    };

    // Проверяем данные из localStorage при первом рендере
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            console.log('Loaded from localStorage:', JSON.parse(storedData)); // Для проверки
        }
    }, []);

    return (
        <Container>
            <ProgressBar currentStep={currentStep} />
            {currentStep === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />}
            {currentStep === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
            {currentStep === 3 && <StepThree prevStep={prevStep} formData={formData} />}
        </Container>
    );
};

export default StepForm;
