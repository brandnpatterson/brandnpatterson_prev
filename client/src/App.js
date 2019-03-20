import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import styled from 'styled-components';

import {
  getChampMastery,
  getInfoFromLocalStorage,
  getSummonerInfo
} from './actions';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import NotFound from './components/NotFound';
import Projects from './components/pages/Projects';

import { lightgray, navy } from './util/colors';
import { openSans } from './util/fonts';
import { mediumUp } from './util/media';

const propTypes = {
  getChampMastery: func.isRequired,
  getInfoFromLocalStorage: func.isRequired,
  getSummonerInfo: func.isRequired,
  summoner: object.isRequired
};

function App(props) {
  const summonerName = 'Brandy Bot';

  useEffect(() => {
    if (
      localStorage.getItem('summoner-champions') &&
      localStorage.getItem('summoner-data')
    ) {
      props.getInfoFromLocalStorage();
    } else {
      props.getChampMastery(summonerName);
      props.getSummonerInfo(summonerName);
    }
  }, []);

  return (
    <StyledApp>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </StyledApp>
  );
}

App.propTypes = propTypes;

const StyledApp = styled.div`
  background: ${navy};
  color: ${lightgray};
  display: block;
  font-family: ${openSans};
  min-height: 100vh;
  overflow-x: hidden;

  .content {
    margin: 0 2rem 5rem 2rem;
    max-width: 950px;

    @media ${mediumUp} {
      margin: 0 auto 5rem;
      max-width: 80%;
    }
  }

  a {
    color: ${lightgray};
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = {
  getChampMastery,
  getInfoFromLocalStorage,
  getSummonerInfo
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
