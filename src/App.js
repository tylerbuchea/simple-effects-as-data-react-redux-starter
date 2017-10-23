import React from 'react';
import { connect } from 'react-redux';
import fxns from './effects/allFunctions';

export class App extends React.Component {
  componentDidMount() {
    const { fxns } = this.props;
    fxns.getUser();
  }

  render() {
    return (
      <div>
        <h1>Effects as Data Rocks!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state });
const mapDispatchToProps = (dispatch, ownProps) => ({ fxns });
export default connect(mapStateToProps, mapDispatchToProps)(App);
