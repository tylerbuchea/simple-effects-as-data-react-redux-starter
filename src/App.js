import React from 'react';
import { connect } from 'react-redux';
import fxns from './effects/allFunctions';

export class App extends React.Component {
  componentDidMount() {
    const { fxns } = this.props;
    fxns.getUser('tylerbuchea');
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <h1>Effects as Data Rocks!</h1>
        <img src={user.avatar_url} alt="user avatar" width="100" />
        <a href={user.html_url}>{user.login}</a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state });
const mapDispatchToProps = (dispatch, ownProps) => ({ fxns });
export default connect(mapStateToProps, mapDispatchToProps)(App);
