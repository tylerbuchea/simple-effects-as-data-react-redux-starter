import React from 'react';
import { withStyles } from 'material-ui/styles';
import Slider from './Slider';

export function Header(props) {
  const { classes, games } = props;
  return (
    <div className={classes.root}>
      <header className={classes.hero}>
        <Slider title="" games={games} />
      </header>
    </div>
  );
}

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hero: {
    backgroundColor: '#222',
    padding: 20,
    color: 'white',
  },
  title: {
    fontSize: '1.5em',
  },
  logo: {
    height: 80,
  },
});

export default withStyles(styles)(Header);
