import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Headers from './components/Headers';
// import Header from './components/Header';
import HeaderSwitchers from './components/HeaderSwitchers';

function App() {
  return (
    <div className="app">
      <HeaderSwitchers />
      <Headers />
      <Footer />
    </div>
  );
}

export default App;
