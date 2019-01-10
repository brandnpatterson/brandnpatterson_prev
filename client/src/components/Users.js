import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Users extends Component {
  static propTypes = {
    fetchUsers: func.isRequired,
    users: object.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <ul>
        {users.data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  users: state.users
});

const mapDispatchToProps = { fetchUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
