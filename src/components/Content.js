import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Layout from './Layout';
import vars from '../data/general';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 9,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 10,
    },
  },
  mainHeadline: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 2,
    },
    paddingLeft: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit,
  },
  secondaryItems: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 1,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing.unit,
    },
  },
  component: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
});

class Content extends Component {
  render() {
    const { classes } = this.props;

    const contentObject = (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={8} className={classes.component}>
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            {vars.content.labelExperience}
          </Typography>
          <Experience />
        </Grid>
        <Grid item xs={12} md={4} className={classes.component}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={12}>
              <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
                {vars.content.labelSkills}
              </Typography>
              <Skills className={classes.component} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} className={classes.secondaryItems}>
              <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
                {vars.content.labelEducation}
              </Typography>
              <Education className={classes.component} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );

    return <Layout>{contentObject}</Layout>;
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
