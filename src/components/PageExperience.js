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

const insertBreakPoints = () => {
  const pixelRatio = window.devicePixelRatio;
  const documentHeight = document.body.offsetHeight;
  const documentWidth = document.body.offsetWidth;
  const divs = document.querySelectorAll('div[class*=noBreak]');
  for (let i = 0; i < divs.length; i += 1) {
    console.log(i, ' at ', divs[i].offsetTop);
  }
  console.log('pixelRatio ', pixelRatio);
  console.log('documentHeight ', documentHeight);
  console.log('documentWidth ', documentWidth);

  // Apparently we can't calculate the height of elements that have display:none
  // so we show it all on load, insert breakpoints, and then hide what will be printed

  /* const onlyprint = document.querySelectorAll('div[class*=onlyPrint]');
  for (let i = 0; i < onlyprint.length; i += 1) {
    onlyprint[i].classList.remove('onlyPrint');
    onlyprint[i].classList.add('onlyPrintAfterInject');
  }
  const noprint = document.querySelectorAll('div[class*=noPrintBeforeInject]');
  for (let i = 0; i < noprint.length; i += 1) {
    noprint[i].classList.remove('noPrintBeforeInject');
    noprint[i].classList.add('noPrint');
  } */
};

class PageExperience extends Component {
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
