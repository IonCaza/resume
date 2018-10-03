import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Experience from './WidgetExperience';
import Skills from './WidgetSkills';
import Education from './WidgetEducation';
import Print from './WidgetPrint';
import Layout from './NavLayout';

import vars from '../data/general';
import '../styles/Print.scss';
import { insertBreakPoints, togglePrintNonPrint } from './FunctionsPrint';

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
  },
});

class PageExperience extends Component {
  componentDidMount() {
    console.log('hits1');
    insertBreakPoints();
    togglePrintNonPrint();
  }

  render() {
    const { classes, location } = this.props;
    const { pathname } = location;

    const contentObject = (
      <Grid container spacing={0}>
        <Grid item xs={12} className={classNames('noPrintBeforeInject')}>
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={12} md={8} className={classes.component}>
              <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
                {vars.content.labelExperience}
              </Typography>
              <Experience />
            </Grid>
            <Grid item xs={12} md={4} className={classes.component}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6} md={12}>
                  <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
                    {vars.content.labelSkills}
                  </Typography>
                  <Skills />
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
                    {vars.content.labelEducation}
                  </Typography>
                  <Education />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Print />
        </Grid>
      </Grid>
    );

    return <Layout path={pathname}>{contentObject}</Layout>;
  }
}

PageExperience.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageExperience);
