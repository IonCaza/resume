import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import experience from '../data/experience';
import vars from '../data/general';
import '../styles/Print.scss';

const styles = theme => ({
  experience: {
    textAlign: 'center',
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paperPrint: {
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    borderRadius: '2px',
  },
  right: {
    textAlign: 'right',
  },
  indent1: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

const Experience = props => {
  const { classes, elevation, print } = props;

  const experienceObject = (
    <Grid
      container
      spacing={24}
      className={classNames(classes.experience, print ? 'displayBlock' : '')}
    >
      <Grid item xs={12} className={classNames(print ? 'displayBlock' : '')}>
        {experience.jobs.map(job => (
          <Paper
            className={classNames(
              print ? classes.paperPrint : classes.paper,
              print ? 'displayBlock' : '',
              print ? 'unbreakable' : ''
            )}
            elevation={elevation}
            key={job.id}
          >
            {print ? (
              <Grid container className="displayBlock">
                <Grid item xs={12}>
                  <Typography variant="title">
                    {job.position} for {job.company}
                  </Typography>
                  <Typography variant="subheading">
                    Between {job.startDate} and {job.endDate} in {job.location}
                  </Typography>
                  <Typography className={classNames(classes.indent1)}>{job.description}</Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="headline" gutterBottom>
                    {job.position}
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.right}>
                  <Typography variant="subheading">
                    {job.startDate} - {job.endDate}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="title">{job.company}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.right}>
                  <Typography variant="subheading">{job.location}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom className={classNames(classes.indent1)}>
                    {job.description}
                  </Typography>
                </Grid>
              </Grid>
            )}
            {job.summary && (
              <Grid item xs={12}>
                <Typography variant="subheading">{vars.experience.labelSummary}</Typography>
                <Typography className={classNames(classes.indent1)}>{job.summary}</Typography>
              </Grid>
            )}
            {job.responsibilities && (
              <Grid item xs={12}>
                <Typography variant="subheading">
                  {vars.experience.labelResponsibilities}
                </Typography>
                {job.responsibilities.map((responsibility, index) => (
                  <Typography key={index} className={classNames(classes.indent1)}>&bull; {responsibility}</Typography> /* eslint-disable-line */
                ))}
              </Grid>
            )}
            {job.achievements && (
              <Grid item xs={12}>
                <Typography variant="subheading">{vars.experience.labelAchievements}</Typography>
                {job.achievements.map((achievement, index) => (
                        <Typography key={index} className={classNames(classes.indent1)}>&bull; {achievement}</Typography> /* eslint-disable-line */
                ))}
              </Grid>
            )}
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
  return experienceObject;
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

Experience.defaultProps = {
  elevation: 2,
  print: 0,
};

export default withStyles(styles)(Experience);
