import React, { useEffect, useRef, useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';

import { getChampMastery, getSummonerInfo } from './actions';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Summoner from './pages/Summoner';
import Work from './pages/Work';

import Footer from './components/Footer';
import Header from './components/Header';

import { lightgray, navy } from './util/colors';
import { openSans } from './util/fonts';
import { mediumUp } from './util/media';

const propTypes = {
  getChampMastery: func.isRequired,
  getSummonerInfo: func.isRequired
};

function App(props) {
  const summonerName = 'brandybot';
  const [isFocusing, setIsFocusing] = useState('');
  const leagueNavRef = useRef(null);
  const workNavRef = useRef(null);

  useEffect(() => {
    props.getChampMastery(summonerName);
    props.getSummonerInfo(summonerName);
  }, []);

  return (
    <StyledApp>
      <Header
        isFocusing={isFocusing}
        leagueNavRef={leagueNavRef}
        setIsFocusing={setIsFocusing}
        workNavRef={workNavRef}
      />
      <div className="content">
        <Switch>
          <Route
            path="/about"
            component={() => <About setIsFocusing={setIsFocusing} />}
          />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/"
            component={() => (
              <Home workNavRef={workNavRef} setIsFocusing={setIsFocusing} />
            )}
          />
          <Route path="/league" component={Summoner} />
          <Route path="/projects" render={() => <Redirect to="/league" />} />
          <Route path="/work" component={Work} />
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
    max-width: 59.38rem;

    @media ${mediumUp} {
      margin: 0 auto 10rem;
      max-width: 92%;
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

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getChampMastery,
  getSummonerInfo
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
