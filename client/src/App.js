import React, { useEffect } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { getChampMastery, getSummonerInfo } from './actions';

import About from './components/pages/About';
// import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import NotFound from './components/NotFound';
import Projects from './components/pages/Projects';

import { navy, textColor } from './util/colors';
import { openSans } from './util/fonts';
import { mediumUp } from './util/media';

const propTypes = {
  getChampMastery: func.isRequired,
  getSummonerInfo: func.isRequired
};

function App(props) {
  const summoner = 'Brandy Bot';

  useEffect(() => {
    props.getChampMastery(summoner);
    props.getSummonerInfo(summoner);
  }, []);

  return (
    <StyledApp>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/blog" component={Blog} /> */}
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
  color: ${textColor};
  display: block;
  font-family: ${openSans};
  min-height: 100vh;

  .content {
    margin: 0 2rem 5rem 2rem;
    max-width: 950px;

    @media ${mediumUp} {
      margin: 0 auto 5rem;
      max-width: 80%;
    }
  }

  a {
    color: ${textColor};
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
