import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { getChampMastery, getSummonerInfo } from './actions';
import { getGithubInfo } from './actions';

import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Github from './components/pages/Github';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Summoner from './components/pages/Summoner';

import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

const propTypes = {
  getChampMastery: func.isRequired,
  getGithubInfo: func.isRequired,
  getSummonerInfo: func.isRequired
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      summoner: 'Brandy Bot'
    };
  }

  componentDidMount() {
    this.props.getChampMastery(this.state.summoner);
    this.props.getSummonerInfo(this.state.summoner);
    this.props.getGithubInfo();
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/github" component={Github} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/summoner" component={Summoner} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </StyledApp>
    );
  }
}

App.propTypes = propTypes;

const StyledApp = styled.div`
  display: block;
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
