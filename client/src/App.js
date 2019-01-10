import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Users from './components/Users';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Users />
      <Footer />
    </div>
  );
};

export default App;
