import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Banners from './components/Banners';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Merchandising"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Juegos"} element={<Banners />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;