import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default App;