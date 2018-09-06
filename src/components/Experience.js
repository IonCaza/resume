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
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  indent1: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const Experience = props => {
  const { classes, elevation } = props;

  const experienceObject = (
    <Grid container spacing={24} className={classes.experience}>
      <Grid item xs={12}>
        {experience.jobs.map(job => (
          <Paper className={classNames(classes.paper)} elevation={elevation} key={job.id}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="headline" gutterBottom>
                  {job.position}
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.rightAlign}>
                <Typography variant="subheading">
                  {job.startDate} - {job.endDate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="title">{job.company}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.rightAlign}>
                <Typography variant="subheading">{job.location}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.indent1}>
                  {job.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0} className="no-break">
                  <Grid item xs={12} className="no-break">
                    {job.summary && (
                      <div>
                        <Typography variant="subheading">{vars.experience.labelSummary}</Typography>
                        <Typography gutterBottom className={classes.indent1}>
                          {job.summary}
                        </Typography>
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12} className="no-break">
                    {job.responsibilities && (
                      <Typography variant="subheading">
                        {vars.experience.labelResponsibilities}
                      </Typography>
                    )}
                    {job.responsibilities &&
                      job.responsibilities.map((responsibility, index) => (
                  <Typography key={index} className={classes.indent1}>&bull; {responsibility}</Typography> /* eslint-disable-line */
                      ))}
                  </Grid>
                  <Grid item xs={12} className="no-break">
                    {job.achievements && (
                      <Typography variant="subheading">
                        {vars.experience.labelAchievements}
                      </Typography>
                    )}
                    {job.achievements &&
                      job.achievements.map((achievement, index) => (
                  <Typography key={index} className={classes.indent1}>&bull; {achievement}</Typography> /* eslint-disable-line */
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
};

export default withStyles(styles)(Experience);
