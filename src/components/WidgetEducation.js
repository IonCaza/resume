import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import education from '../data/education';

const styles = theme => ({
  education: {
    textAlign: 'center',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paperPrint: {
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
});

const Education = props => {
  const { classes, elevation, print } = props;

  const educationObject = (
    <Grid container spacing={16} className={classes.education}>
      <Grid item xs={12}>
        <Paper
          className={classNames(print ? classes.paperPrint : classes.paper)}
          elevation={elevation}
        >
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
        <Paper
          className={classNames(print ? classes.paperPrint : classes.paper)}
          elevation={elevation}
        >
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

Education.defaultProps = {
  elevation: 2,
  print: 0,
};

export default withStyles(styles)(Education);
