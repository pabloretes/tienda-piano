import './styles/App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavBar.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App" id='inicio'>
      <BrowserRouter>
        <header><NavBar /></header>
        
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoty/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
