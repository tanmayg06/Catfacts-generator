import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import NumberInputButton from './NumberInputButton';
import MeowFacts from './MeowFacts';
import { useState } from 'react';




const Container = styled(Box)`
display: flex;
flex-direction: column;
text-align: center

`

const Wrapper = styled(Box)`

display: flex;
justify-content: center;
height: 30px;`

const ButtonWrapper = styled(Box)`
display: flex;
justify-content: center;
margin-top: 20px;`

const Home = () => {

    const [value, setValue] = useState(null);
    





    return (

        
        
            <Container style={{minHeight:'100vh'}}>
                <Typography style={{paddingTop: '30px' ,  fontSize: '30px' , fontFamily: 'math' , fontWeight: 600}}>Welcome to the Cats Facts Generator</Typography>
                <Typography style = { {fontSize:"20px" , fontWeight:600}}>It generates Random Cat facts... </Typography>
                
            


            <Wrapper>
                <Typography style={{fontSize:"14px" , fontStyle:"italic"}} >Click on the button below to generate numbers of random cat facts :

                </Typography>
            </Wrapper>
            <ButtonWrapper>
                <Box>
                <NumberInputButton  count={value} setCount={setValue}/>
                </Box>
            </ButtonWrapper>


            


            <Box >
                <MeowFacts count = {value}/>
            </Box>

            

            

            


            </Container>

            

            

            


          
        
    );
}

export default Home;