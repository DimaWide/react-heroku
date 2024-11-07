import React from 'react';
import { Box } from '@mui/material';

const ProgressBar = ({ currentStep }) => {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', mb: 2 }}>
            <Box
                sx={{
                    width: `${(currentStep / 3) * 100}%`,
                    backgroundColor: '#3b5998',
                    height: '10px',
                    borderRadius: '5px',
                }}
            />
        </Box>
    );
};

export default ProgressBar;
