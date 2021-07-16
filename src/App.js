import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import GlobalProvider from './Contexts/GlobalContext/GlobalContext';
import HeaderProvider from './Contexts/HeaderContext/HeaderContext';

function App() {
  return (
    <GlobalProvider>
      <main className="main-root">
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Footer />
      </main>
    </GlobalProvider>
  );
}

export default App;
