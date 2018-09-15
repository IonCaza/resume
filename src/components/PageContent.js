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
    paddingLeft: theme.spacing.unit * 2,
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

const insertBreakPoints = () => {
  const pxRatio = window.devicePixelRatio;
  const divs = document.querySelectorAll('div[class*=nobreak]');
  for (let i = 0; i < divs.length; i += 1) {
    console.log(i, ' at ', divs[i].offsetTop);
  }
  console.log('pxratio ', pxRatio);
  const onlyprint = document.querySelectorAll('div[class*=onlyprint]');
  for (let i = 0; i < onlyprint.length; i += 1) {
    onlyprint[i].classList.remove('onlyprint');
    onlyprint[i].classList.add('onlyprintafterinject');
  }
};

class Content extends Component {
  componentDidMount() {
    insertBreakPoints();
  }

  render() {
    const mediaQueryList = window.matchMedia('print');

    mediaQueryList.addListener(mql => {
      if (mql.matches) {
        // console.log('onbeforeprint equivalent');
      } else {
        // console.log('onafterprint equivalent');
      }
    });

    const { classes, location } = this.props;
    const { pathname } = location;

    const contentObject = (
      <Grid container spacing={0}>
        <Grid item xs={12} className={classNames('noprint' /* , 'dontdisplaytest' */)}>
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
        </Grid>
        <Print />
      </Grid>
    );

    return <Layout path={pathname}>{contentObject}</Layout>;
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);