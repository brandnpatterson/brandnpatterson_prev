import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route render={NotFound} />
      </Switch>
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: block;
`;

export default App;
