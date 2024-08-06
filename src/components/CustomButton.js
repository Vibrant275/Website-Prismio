import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButtonWrapper = styled(Button)(({ theme }) => ({
    // Add your custom styles here
    color: 'white',
    backgroundColor: '#0099ff',
    borderRadius: '7px',
    padding: '10px 10px',
    '&:hover': {
        backgroundColor: '#0086e1',
    },
    fontFamily: 'Poppins, sans-serif',
}));

const CustomButton = ({ children, onClick }) => {
    return (
        <CustomButtonWrapper onClick={onClick}>
            {children}
        </CustomButtonWrapper>
    );
};

export default CustomButton;
