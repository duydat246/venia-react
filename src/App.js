import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import HeaderProvider from './Contexts/HeaderContext/HeaderContext';
// import Headers from './components/Headers';
// // import Header from './components/Header';
// import HeaderSwitchers from './components/HeaderSwitchers';

function App() {
  return (
    <main className="main-root">
      <HeaderProvider>
        {/* <HeaderSwitchers />
      <Headers /> */}
        <Header />
        <Footer />
      </HeaderProvider>
    </main>
  );
}

export default App;
