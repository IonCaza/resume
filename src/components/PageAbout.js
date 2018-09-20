import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from './NavLayout';
import About from './WidgetAbout';

import vars from '../data/general';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 9,
    },
    paddingTop: theme.spacing.unit * 8,
  },
  mainHeadline: {
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 3,
  },
  component: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
  },
});

const PageAbout = props => {
  const { classes } = props;

  const aboutObject = (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} className={classes.component}>
        <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
          {vars.content.labelAbout}
        </Typography>
        <About />
      </Grid>
    </Grid>
  );

  return <Layout>{aboutObject}</Layout>;
};

PageAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageAbout);
