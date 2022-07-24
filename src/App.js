import './styles/App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavBar.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='inicio'>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting='Saludando al publico por props' />
      <Footer />
    </div>
  );
}

export default App;
