import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { getChampMastery, getSummonerInfo } from './actions';
import { getGithubInfo } from './actions';

import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

// import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

import { navy, textColor } from '../util/colors';
import { openSans } from '../util/fonts';
import { mediumUp } from '../util/media';

const propTypes = {
  getChampMastery: func.isRequired,
  getGithubInfo: func.isRequired,
  getSummonerInfo: func.isRequired
};

function App(props) {
  const summoner = 'Brandy Bot';

  useEffect(() => {
    props.getChampMastery(summoner);
    props.getSummonerInfo(summoner);
    props.getGithubInfo();
  });

  return (
    <StyledApp>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </StyledApp>
  );
}

App.propTypes = propTypes;

const StyledApp = styled.div`
  background: ${navy};
  color: ${textColor};
  display: block;
  font-family: ${openSans};
  min-height: 100vh;

  .content {
    margin: 0 2rem;
    max-width: 950px;

    @media ${mediumUp} {
      margin: 0 auto;
      max-width: 80%;
    }
  }

  a {
    color: ${textColor};
  }

  li {
    list-style: none;
  }
`;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getChampMastery,
  getGithubInfo,
  getSummonerInfo
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
