import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import withRoot from './withRoot';
import education from '../data/education';

const styles = theme => ({
  experience: {
    textAlign: 'center',
    padding: theme.spacing.unit,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
});

const Education = props => {
  const { classes } = props;

  const educationObject = (
    <Grid container spacing={16} className={classes.experience}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {education.degrees.map((degree, index) => (
            <Grid container key={degree.id}>
              <Grid item xs={12}>
                <Typography variant="headline" gutterBottom>
                  {degree.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="title" gutterBottom>
                  {degree.school}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" gutterBottom>
                  {degree.sub}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" gutterBottom>
                  {degree.startDate} - {degree.endDate}
                </Typography>
                {index !== education.degrees.length - 1 && <br />}
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper2}>
          {education.certifications.map((certification, index) => (
            <Grid container key={certification.id}>
              <Grid item xs={12}>
                <Typography variant="title" gutterBottom>
                  {certification.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" gutterBottom>
                  License: {certification.number}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" gutterBottom>
                  {certification.startDate} - {certification.endDate}
                </Typography>
                {index !== education.certifications.length - 1 && <br />}
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );

  return educationObject;
};

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Education));
