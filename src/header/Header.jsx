import React from 'react';
import {Box , Typography , styled} from '@mui/material';


const Container = styled(Box)`
    background-color: #282828;
    height: 200px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;`

const Image = styled(Box)`
border-radius: 50%;`




 


    


const Header = () => {

    return (
        <Container >

            
            
            <Typography style={{fontFamily:'cursive',color:'aliceblue',fontSize:'40px',fontWeight:800}} >CATS FACTS GENERATOR </Typography>
            

            <Image>
                <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user" alt="cat" style={{width: 100, height: 100}}/>
            </Image>

            
            
        </Container>
    )
}

export default Header;