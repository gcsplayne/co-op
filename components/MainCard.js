
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
    marginTop:'30'
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className={styles.bookbox}><p className={styles.banner}>The BEST acoustic vibe for your event</p>
      <Grid container direction="row"
      justifyContent="center"
      alignItems="center" spacing={4}>
<Grid item xs={12} sm={6} md={4}>
<Link href="booking">
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image="/images/Selfie2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Private Events
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Book your private events
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Link>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Link href="booking">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image="/images/Couple.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weddings
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Book your wedding singer today
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Link>
    </Grid>


    <Grid item xs={12} sm={6} md={4}>
    <Link href="booking">
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image="/images/MP2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Restaurants - Coffee Shop - Bars
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Make you dance, Make you cry and everything in between
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Link>
    </Grid>
    </Grid>
    </div>
  );
}