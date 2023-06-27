import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
