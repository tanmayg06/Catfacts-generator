
// src/MeowFacts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography , styled } from '@mui/material';
//import {List , ListItem , ListItemButton } from '@mui/material';


const Container = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;`

const FactWrapper = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;`


const Wrapper = styled(Box)`
background-color: #212121;
text-color: white;

margin-top: 10px;`

const MeowFacts = ({ count }) => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get(`https://meowfacts.herokuapp.com/?count=${count}`);
        setFacts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFacts();
  }, [count]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <Container>
        { count > 0 ?
            
            <Box>
            <Typography style = {{fontSize:'30px' , fontFamily:'math' , textDecoration:'underline' , fontWeight:'bold'}}>Cat Facts :</Typography>
           </Box>
        :
        <Box>
            <Typography style = {{fontSize:'30px' , fontFamily:'math' , textDecoration:'underline' , fontWeight:'bold'}}>No Cat Facts to Display</Typography>
        </Box>
        }

    </Container>    

        <FactWrapper>
        
            <ul>
                {facts.map((fact, index) => (
                
                    
                   <li> <Wrapper key={index}><Typography style={{color:'white'}}>{fact}</Typography></Wrapper></li>
                     
                 ))}
            </ul>

        </FactWrapper>
      
    
    </>
  );
};

export default MeowFacts;
