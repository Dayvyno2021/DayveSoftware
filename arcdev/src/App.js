import {useState} from 'react'
import Header from './components/header/Header';
import { Routes, Route} from "react-router-dom";
import { theme } from './components/ui/Theme';
import { ThemeProvider} from '@mui/material/styles';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
import ServicesScreen from './pages/servicespage/ServicesScreen';
import CustomSWScreen from './pages/customSoftware/CustomSWScreen';
import IosAndroidScreen from './pages/iosAndroidPage/IosAndroidScreen';
import WebsitesScreen from './pages/websites/WebsitesScreen';
import RevolutionScreen from './pages/revolution/RevolutionScreen';
import Aboutus from './pages/aboutus/Aboutus';
import ContactusScreen from './pages/contactus/ContactusScreen';
import EstimateScreen from './pages/estimate/EstimateScreen';

function App() {
    //Handles the selection/highlight of a tab and also in the drawer
    const [value, setValue] = useState(0);

  //Handles the selection/highlight of an item in the menu
    const [anchorIndex, setAnchorIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} anchorIndex={anchorIndex} 
        setAnchorIndex={setAnchorIndex} 
      />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/customsoftware" element={<CustomSWScreen/>} />
          <Route path="/mobileapps" element={<IosAndroidScreen/>} />
          <Route path="/websites" element={<WebsitesScreen/>} />
          <Route path="/services" element={<ServicesScreen/>} />
          <Route path="/revolution" element={<RevolutionScreen/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/contact" element={<ContactusScreen/>} />
          <Route path="/estimate" element={<EstimateScreen/>} />
      </Routes>
      <Footer value={value} setValue={setValue} anchorIndex={anchorIndex} 
        setAnchorIndex={setAnchorIndex} 
      />
    </ThemeProvider>
  );
}

export default App;
