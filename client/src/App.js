import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchChampMastery, fetchSummonerInfo } from './actions';

import Footer from './components/Footer';
import Github from './components/Github';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Summoner from './components/Summoner';

class App extends React.Component {
  static propTypes = {
    fetchChampMastery: func.isRequired,
    fetchSummonerInfo: func.isRequired
  };

  componentDidMount() {
    this.props.fetchChampMastery('brandy-bot');
    this.props.fetchSummonerInfo('brandy-bot');
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
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

const mapDispatchToProps = { fetchChampMastery, fetchSummonerInfo };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
