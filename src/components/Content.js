import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import withRoot from './withRoot';
import vars from '../data/general';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingTop: theme.spacing.unit * 10,
  },
  mainHeadline: {
    paddingLeft: theme.spacing.unit * 3,
  },
  secondaryItems: {
    paddingTop: theme.spacing.unit * 4,
  },
});

const Content = props => {
  const { classes } = props;

  const content = (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={8}>
        <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
          {vars.content.labelExperience}
        </Typography>
        <Experience />
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
              {vars.content.labelSkills}
            </Typography>
            <Skills />
          </Grid>
          <Grid item xs={12} className={classes.secondaryItems}>
            <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
              {vars.content.labelEducation}
            </Typography>
            <Education />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return content;
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Content));
