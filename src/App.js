import React from 'react';
import NavBar from './components/NavBar';
import Banners from './components/Banners';
import Dlc from './components/Dlc';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <NavBar />
      <Banners />
      <Dlc greeting="Mount and blade : DLC" />
      <Footer />
    </div>
  );
}

export default App;
