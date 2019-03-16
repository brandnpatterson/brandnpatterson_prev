import React, { Fragment } from 'react';
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
              <div className="champion-image-wrap">
                <img src={champ.src} alt={champ.name} />
              </div>
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
      <div className="champions">
        {placeholders.map((champ, index) => {
          return (
            <div key={index}>
              <div className="champion placeholder" />
              <div className="champion-name placeholder" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { champions, data } = this.props.summoner;

    return (
      <StyledSummoner>
        <div className="summoner-header">
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
          <div className="summoner-name-wrap">
            {data ? (
              <Fragment>
                <h3 className="summoner-name">
                  {data.name ? data.name : 'Not Found'}
                </h3>
                <p className="summoner-level">
                  {data.level ? `Level: ${data.level}` : 'Please try again'}
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <div className="summoner-name placeholder" />
                <div className="summoner-level placeholder" />
              </Fragment>
            )}
          </div>
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

const StyledSummoner = styled.div`
  background: ${cardColor};
  border-radius: 5px;
  box-shadow: ${boxShadow};
  margin: 0 auto 2.45rem;
  max-width: 36.4rem;
  min-height: 661px;

  padding: 2rem;

  @media ${mediumUp} {
    margin-bottom: 3rem;
    max-width: 100%;
  }

  .summoner-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 3rem;
    max-width: 80%;
    min-height: 281.3px;

    @media ${smallOnly} {
      max-width: 100%;
    }

    @media ${mediumUp} {
      align-items: center;
      flex-direction: row;
      margin-bottom: 1rem;
      max-width: 90%;
      min-height: 171px;
    }

    @media ${largeUp} {
      max-width: 90%;
    }
  }

  .placeholder {
    background: ${surf};
    box-shadow: ${boxShadow};
    opacity: 0.3;
  }

  .summoner-name {
    font-family: ${openSans};
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 0;
    margin-top: 0;

    @media ${mediumUp} {
      font-size: 3rem;
    }
  }

  .summoner-name.placeholder {
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    min-height: 36px;
    width: 200px;

    @media ${mediumUp} {
      min-height: 55px;
      width: 250px;
    }
  }

  .summoner-level {
    color: ${surf};
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;

    @media ${mediumUp} {
      font-size: 2rem;
    }
  }

  .summoner-level.placeholder {
    min-height: 27px;
    width: 100px;

    @media ${mediumUp} {
      min-height: 36px;
      width: 150px;
    }
  }

  .summoner-form {
    text-align: center;

    @media ${mediumUp} {
      text-align: right;
    }
  }

  .summoner-search-text {
    margin-top: 0;
    text-align: left;
  }

  .summoner-interface {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media ${mediumUp} {
      flex-direction: row;
    }
  }

  .summoner-button,
  .summoner-input {
    height: 2rem;
  }

  .summoner-input {
    border: 0;
    border-radius: 0;
    height: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    width: 12rem;

    @media screen and (min-width: 450px) {
      margin-right: inherit;
    }
  }

  .summoner-buttons {
    display: flex;
    flex-direction: row;
    margin-right: 1.75rem;

    @media screen and (min-width: 450px) {
      margin-right: inherit;
    }
  }

  .summoner-button {
    background: none;
    border: 1px solid ${surf};
    color: ${surf};
    width: 5rem;

    &:hover {
      opacity: 0.5;
    }
  }

  .summoner-button:first-child {
    margin-right: 1rem;

    @media ${mediumUp} {
      margin-left: 1rem;
    }
  }

  .champions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 25rem;

    @media ${mediumUp} {
      max-width: 57.5rem;
    }
  }

  .champion {
    margin: 0.5rem;
    width: 4rem;

    @media ${mediumUp} {
      margin: 2rem;
      width: 7.5rem;
    }

    img {
      width: 100%;
    }
  }

  .champion.placeholder {
    height: 64px;
    width: 64px;

    @media ${mediumUp} {
      height: 120px;
      margin-bottom: 1rem;
      width: 120px;
    }
  }

  .champion-name {
    height: 20px;
    margin: 1rem auto 1.49rem;
    width: 64px;

    @media ${mediumUp} {
      width: 120px;
    }
  }
`;

Summoner.propTypes = propTypes;

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = { getChampMastery, getSummonerInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
