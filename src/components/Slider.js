import React from 'react';
import { withStyles } from 'material-ui/styles';
import Slider from 'react-slick';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import InboxIcon from 'material-ui-icons/Inbox';
import Rating from './Rating';

export class SimpleSlider extends React.Component {
  renderArrow = () => {
    // const { classes } = this.props;

    return (
      <div>
        <InboxIcon />
      </div>
    );
  };

  render() {
    const { title, games, classes, settings = {} } = this.props;
    const defaultSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: true,
      // nextArrow: this.renderArrow(),
    };
    return (
      <div className={classes.root}>
        <div>{title}</div>
        <Slider {...defaultSettings} {...settings}>
          {games.map((game, index) => (
            <div key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={game.gridImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography type="headline" component="h2">
                    {game.title}
                  </Typography>
                  {/* <Typography component="p">{game.description}</Typography> */}
                </CardContent>
                <CardActions>
                  <Button dense color="primary">
                    Play
                  </Button>
                  <Rating
                    value={3}
                    max={5}
                    onChange={value => console.log(`Rated with value ${value}`)}
                  />
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    padding: 20,
  },
  gridImage: {
    backgroundColor: '#aaa',
    height: 200,
  },
  card: {
    width: 280,
    height: 355,
    margin: 5,
  },
  media: {
    height: 200,
  },
});
export default withStyles(styles)(SimpleSlider);
