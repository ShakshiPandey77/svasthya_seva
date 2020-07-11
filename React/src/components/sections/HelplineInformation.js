import React from "react";
import { lighten, makeStyles, darken } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme=>({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140,
    
  },
  paper:{
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6)
  },
}));

export default function Help() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
         <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>

      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
  );
}
