import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Banners from './components/Banners';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Merchandising"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Juegos"} element={<Banners />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;