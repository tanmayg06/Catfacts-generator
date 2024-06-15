import './App.css';
import {Box} from '@mui/material';
import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/Footer';





function App() {
  return (
        
    <Box style = {{display:'flex', flexDirection:'column'}}>
        <Header/>

        <Home/>

        <Footer/>

        

        

        

    </Box>

    
  );
}

export default App;
