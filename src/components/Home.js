import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import fxns from '../effects/allFunctions';
import Slider from './Slider';
import Header from './Header';
import MainMenu from './MainMenu';

export class Home extends React.Component {
  componentDidMount() {
    // this.props.fxns.getGames();
  }

  render() {
    console.log(this.props);
    const { classes, games } = this.props;
    return (
      <MainMenu>
        <Header games={games.choice} />
        <div className={classes.mainContnet}>
          <Slider title="Top Rated" games={games.top} />
          <Slider
            title="Virutal Reality & Augmented Reality"
            games={games.xr}
          />
          <Slider title="Latest Releases" games={games.latest} />
        </div>
      </MainMenu>
    );
  }
}

const styles = theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    marginTop: 64,
  },
});
const mapStateToProps = (state, ownProps) => ({ ...state });
const mapDispatchToProps = (dispatch, ownProps) => ({ fxns });
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(Home)
);
