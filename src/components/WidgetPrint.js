import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Experience from './WidgetExperience';
import Skills from './WidgetSkills';
import Education from './WidgetEducation';
import About from './WidgetAbout';
import Contact from './WidgetContact';
import Breakpoint from './WidgetBreakpoint';

import vars from '../data/general';
import '../styles/Print.scss';

const styles = theme => ({
  mainHeadline: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 2,
    },
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
  component: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
});

const Print = props => {
  const { classes } = props;

  const printObject = (
    <Grid container spacing={0}>
      <Grid item xs={12} className="onlyprint">
        <Grid container spacing={0} className="rootprint">
          <Grid item xs={12} className={classes.component}>
            <Contact elevation={0} print={1} />
          </Grid>
          <Grid item xs={12} className={classes.component}>
            <About elevation={0} print={1} />
          </Grid>
          <Grid item xs={12} className={classes.component}>
            <Typography variant="display1" className={classes.mainHeadline}>
              {vars.content.labelExperience}
            </Typography>
            <Experience elevation={0} print={1} />
          </Grid>
        </Grid>
        <Breakpoint />
        <Grid container spacing={0} className="rootprint">
          <Grid item xs={6} className={classes.component}>
            <Typography variant="display1" className={classes.mainHeadline}>
              {vars.content.labelSkills}
            </Typography>
            <Skills print={1} elevation={0} />
          </Grid>
          <Grid item xs={6} className={classes.component}>
            <Typography variant="display1" className={classes.mainHeadline}>
              {vars.content.labelEducation}
            </Typography>
            <Education elevation={0} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return printObject;
};

Print.propTypes = {
  classes: PropTypes.object.isRequired,
};

Print.defaultProps = {
  elevation: 2,
};

export default withStyles(styles)(Print);
