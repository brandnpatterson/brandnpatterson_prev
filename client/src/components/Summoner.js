import React from 'react';
import { func, object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getChampMastery, getSummonerInfo } from '../actions';

import Ranked from './Ranked';

import { boxShadow, cardColor, surf } from '../util/colors';
import { openSans } from '../util/fonts';
import { largeUp, mediumUp, smallOnly } from '../util/media';

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

  renderPlaceholders() {
    const placeholders = [];

    for (let i = 0; i < 10; i++) {
      placeholders.push({
        id: i
      });
    }

    return (
      <div className="placeholder-champions">
        {placeholders.map((champ, index) => {
          return <div className="placeholder-champion" key={index} />;
        })}
      </div>
    );
  }

  render() {
    const { champions, data } = this.props.summoner;

    return (
      <StyledSummoner>
        <div className="summoner-header">
          <div>
            {data ? (
              <div>
                <h3 className="summoner-name">
                  {data.name ? data.name : 'Not Found'}
                </h3>
                <p className="summoner-level">
                  {data.level ? `Level: ${data.level}` : 'Please try again'}
                </p>
              </div>
            ) : (
              <div className="placeholder-info">
                <div className="placeholder-summoner-name" />
                <div className="placeholder-summoner-level" />
              </div>
            )}
          </div>
          <form className="summoner-form" onSubmit={this.onSubmit}>
            <h4 className="summoner-search-text">
              Search for your League of Legends top champion stats
            </h4>
            <div className="summoner-interface">
              <input
                className="summoner-input"
                value={this.state.search}
                onChange={this.onChange}
                name="summoner"
                type="text"
              />
              <div className="summoner-buttons">
                <button className="summoner-button" type="submit">
                  Search
                </button>
                <button
                  className="summoner-button"
                  onClick={this.onReset}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
        {data && champions && !data.status && !champions.status ? (
          <div className="champions-wrap">
            {this.renderChampions(champions)}
            <Ranked name="Flex 5v5" data={data.ranked.flex} />
            <Ranked name="Solo / Duo" data={data.ranked.solo} />
          </div>
        ) : (
          <div className="champions-wrap">{this.renderPlaceholders()}</div>
        )}
      </StyledSummoner>
    );
  }
}

Summoner.propTypes = propTypes;

const StyledSummoner = styled.div`
  min-height: 661px;

  @media ${mediumUp} {
    background: ${cardColor};
    border-radius: 5px;
    box-shadow: ${boxShadow};
    padding: 2rem;
  }

  .summoner-header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 1rem;
    max-width: 90%;
    min-height: 281.3px;

    @media ${smallOnly} {
      max-width: 100%;
    }

    @media ${mediumUp} {
      flex-direction: row;
      min-height: 171px;
    }

    @media ${largeUp} {
      max-width: 90%;
    }
  }

  .summoner-name {
    font-family: ${openSans};
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    margin-bottom: 0;
  }

  .summoner-level {
    color: ${surf};
    font-size: 2rem;
    margin-top: 0;
  }

  .summoner-form {
    text-align: center;

    @media ${mediumUp} {
      text-align: right;
    }
  }

  .summoner-interface {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .summoner-input {
    border: 0;
    border-radius: 0;
    height: 2.25rem;
    margin-right: 1.25rem;
    padding-left: 1rem;

    @media screen and (min-width: 450px) {
      margin-right: inherit;
    }
  }

  .summoner-buttons {
    display: flex;
    flex-direction: column;
    margin-right: 1.25rem;

    @media screen and (min-width: 450px) {
      flex-direction: row;
      margin-right: inherit;
    }
  }

  .summoner-button {
    background: none;
    border: 1px solid ${surf};
    color: ${surf};
    margin: 0 0 0.5rem 0.5rem;
    padding: 0.55rem;

    &:hover {
      opacity: 0.5;
    }
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

  .placeholder-summoner-name {
    background: ${surf};
    box-shadow: ${boxShadow};
    height: 55px;
    margin-bottom: 0.5rem;
    opacity: 0.3;
    width: 250px;
  }

  .placeholder-summoner-level {
    background: ${surf};
    box-shadow: ${boxShadow};
    height: 36px;
    opacity: 0.3;
    width: 250px;
  }

  .placeholder-champions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 47.5rem;
    min-height: 474px;

    @media ${mediumUp} {
      max-width: 57.5rem;
    }
  }

  .champions-wrap {
    min-height: 474px;
  }

  .placeholder-champion {
    background: ${surf};
    box-shadow: ${boxShadow};
    height: 120px;
    margin: 1rem;
    opacity: 0.3;
    width: 120px;

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
