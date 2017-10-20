import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import fxns from '../effects/allFunctions';
import Home from './Home';

export class App extends React.Component {
  componentDidMount() {
    const { fxns } = this.props;
    fxns.getUser();
  }

  render() {
    return <Home />;
  }
}

const styles = theme => ({});
const mapStateToProps = (state, ownProps) => ({ ...state });
const mapDispatchToProps = (dispatch, ownProps) => ({ fxns });
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
