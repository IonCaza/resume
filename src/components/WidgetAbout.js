import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import about from '../data/about';
import profilePic from '../assets/Ion-Caza-profile.png';
import '../styles/Print.scss';

const styles = theme => ({
  experience: {
    textAlign: 'left',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paragraph: {
    paddingBottom: theme.spacing.unit * 2,
  },
});

const About = props => {
  const { classes, elevation, print } = props;

  const aboutObject = (
    <Paper className={classes.paper} elevation={elevation}>
      <Grid container spacing={16} className={classes.experience}>
        <Grid item xs={12} md={8}>
          <Typography variant="title" gutterBottom>
            {about.content.labelGoal}
          </Typography>
          <Typography variant="subheading" gutterBottom className={classes.paragraph}>
            {about.content.messageGoal}
          </Typography>
          <Typography variant="title" gutterBottom>
            {about.content.labelPassion}
          </Typography>
          <Typography variant="subheading" gutterBottom className={classes.paragraph}>
            {about.content.messagePassion}
          </Typography>
          <Typography variant="title" gutterBottom>
            {about.content.labelHeritage}
          </Typography>
          <Typography variant="subheading" gutterBottom className={classes.paragraph}>
            {about.content.messageHeritage}
          </Typography>
          <Typography variant="subheading">
            If you&apos;d like to learn more about my professional life, please check out{' '}
            <Link to="/">my experience</Link>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={profilePic} alt="Ion Caza, profile shot" className="pic" />
        </Grid>
      </Grid>
    </Paper>
  );

  const aboutPrintObject = (
    <Grid container spacing={16} className={classes.experience}>
      <Grid item xs={3}>
        <img src={profilePic} alt="Ion Caza, profile shot" className="pic" />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="subheading">{about.content.messageGoal}</Typography>
      </Grid>
    </Grid>
  );

  return print ? aboutPrintObject : aboutObject;
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

About.defaultProps = {
  elevation: 2,
  print: 0,
};

export default withStyles(styles)(About);
