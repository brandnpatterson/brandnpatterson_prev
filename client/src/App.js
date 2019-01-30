import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  fetchGithubInfo,
  fetchChampMastery,
  fetchSummonerInfo
} from './actions';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Github from './components/pages/Github';
import Summoner from './components/pages/Summoner';

import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

class App extends React.Component {
  state = {
    summoner: 'brandybot'
  };

  static propTypes = {
    fetchChampMastery: func.isRequired,
    fetchGithubInfo: func.isRequired,
    fetchSummonerInfo: func.isRequired
  };

  componentDidMount() {
    this.props.fetchChampMastery(this.state.summoner);
    this.props.fetchSummonerInfo(this.state.summoner);
    this.props.fetchGithubInfo();
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/github" component={Github} />
          <Route path="/summoner" component={Summoner} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  display: block;
`;

const mapDispatchToProps = {
  fetchGithubInfo,
  fetchChampMastery,
  fetchSummonerInfo
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
