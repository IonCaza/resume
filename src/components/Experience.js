import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import withRoot from './withRoot';
import experience from '../data/experience';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Experience = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {experience.jobs.map((job, i) => (
        <div>
          {i}
          {job.company}
          {job.description}
          <br />
        </div>
      ))}
    </div>
  );
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Experience));
