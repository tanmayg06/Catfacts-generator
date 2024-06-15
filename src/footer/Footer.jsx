import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled(Box)`
    background-color: #282828;
    height: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 0px;
    padding-top: 32px;
    padding-bottom: 12px;
    position: sticky
    top: 100vh;
    `
    


const Text = styled(Typography)`
    color: white;
    font-size: 20px
    
    `


const IconWrapper = styled(Box)`
    display: flex;
    justify-content: space-between
    margin-top: 30px;
    `








const Footer = () => {
    return (
        <Container>
            <IconWrapper>
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/tanmay-goyal-94b053219/')} style={{color: 'white', fontSize: 40, cursor: 'pointer', marginRight:'10px'}}/>
            <EmailIcon onClick={() => window.open('mailto:tanmaygoyaljpr111@gmail.com')} style={{color: 'white', fontSize: 40, cursor: 'pointer'}}/>
            </IconWrapper>
            <Text>© 2024 MeowFact . Made By Tanmay Goyal</Text>
        </Container>
    )
}

export default Footer;