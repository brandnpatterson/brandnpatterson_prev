import React from 'react';
import { func, object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getChampMastery, getSummonerInfo } from '../actions';

import Loading from './Loading';
import Ranked from './Ranked';

import { surf } from '../../util/colors';
import { openSans } from '../../util/fonts';
import { largeUp, mediumUp, smallOnly } from '../../util/media';

const propTypes = {
  getChampMastery: func.isRequired,
  getSummonerInfo: func.isRequired,
  summoner: object.isRequired
};

class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderChampions = this.renderChampions.bind(this);
  }

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  onReset() {
    const summoner = 'Brandy Bot';

    this.props.getChampMastery(summoner);
    this.props.getSummonerInfo(summoner);

    this.setState({ search: '' });
  }

  onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const summoner = data.get('summoner');

    if (summoner !== '') {
      this.props.getChampMastery(summoner);
      this.props.getSummonerInfo(summoner);
    }
  }

  renderChampions(champions) {
    return (
      <div className="champions">
        {champions.map(champ => {
          return (
            <div className="champion" key={champ.id}>
              <img src={champ.src} alt={champ.name} />
              <p>{champ.name}</p>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { champions, data } = this.props.summoner;

    if (!champions || !data) {
      return <Loading />;
    }

    return (
      <StyledSummoner>
        <div className="summoner-header">
          <div>
            <h3 className="summoner-name">{data.name} </h3>
            <p style={{ fontSize: '2rem', color: surf, marginTop: '0' }}>
              Level: {data.level}
            </p>
          </div>
          <form className="summoner-form" onSubmit={this.onSubmit}>
            <h4 className="summoner-search-text">
              Search for your League of Legends top champion stats
            </h4>
            <input
              value={this.state.search}
              onChange={this.onChange}
              name="summoner"
              type="text"
            />
            <button type="submit">Search</button>
            <button onClick={this.onReset} type="button">
              Reset
            </button>
          </form>
        </div>

        {data.status || champions.status ? (
          <div>
            <p>Summoner not found. Please try again.</p>
          </div>
        ) : (
          <div>
            {this.renderChampions(champions)}
            <Ranked name="Flex 5v5" data={data.ranked.flex} />
            <Ranked name="Solo / Duo" data={data.ranked.solo} />
          </div>
        )}
      </StyledSummoner>
    );
  }
}

Summoner.propTypes = propTypes;

const StyledSummoner = styled.div`
  .summoner-header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 1rem;
    max-width: 90%;

    @media ${smallOnly} {
      max-width: 100%;
    }

    @media ${mediumUp} {
      flex-direction: row;
    }

    @media ${largeUp} {
      max-width: 90%;
    }
  }

  .summoner-form {
    text-align: center;

    @media ${mediumUp} {
      text-align: right;
    }
  }

  .summoner-form button {
    background: none;
    border: 1px solid ${surf};
    color: ${surf};
    margin: 0 0 0.5rem 0.5rem;

    &:hover {
      opacity: 0.5;
    }
  }

  .summoner-name {
    font-family: ${openSans};
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    margin-bottom: 0;
  }

  .champions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 47.5rem;

    @media ${mediumUp} {
      max-width: 57.5rem;
    }
  }

  .champion {
    margin: 1rem;

    @media ${mediumUp} {
      margin: 2rem;
    }
  }
`;

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = { getChampMastery, getSummonerInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
