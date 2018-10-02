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
import printVars from '../data/printvars';

const { pageHeight, pageMargins, pxPerIn } = printVars;

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
  const pageHeightPx = pageHeight * pxPerIn - 2 * pageMargins * pxPerIn;
  const divsClean = document.querySelectorAll('div[class*=cleanBreak]');
  const divsNever = document.querySelectorAll('div[class*=neverBreak]');
  const offset = 50; // pixels not accounted for on top
  const splitAtPercent = 0.7; // if content on next page is more than this percent, split

  const printCleanOffsetTops = new Array(divsClean.length - 1);
  const printNeverOffsetTops = new Array(divsNever.length - 1);

  // Store offsetTop in separate array which we manipulate later
  for (let i = 0; i < divsClean.length; i += 1) {
    printCleanOffsetTops[i] = divsClean[i].offsetTop;
  }
  for (let i = 0; i < divsNever.length; i += 1) {
    printNeverOffsetTops[i] = divsNever[i].offsetTop;
  }

  // Iterate through all divs to calculate whether splitting is required
  for (let i = 0; i < divsClean.length; i += 1) {
    const onPage = Math.ceil((printCleanOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printCleanOffsetTops[i] + offset + divsClean[i].offsetHeight);
    const doTheSplit = () =>
      Math.abs(remainderOnNextPage / divsClean[i].offsetHeight) > splitAtPercent;

    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointElement = document.createElement('div');
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.className = 'breakHere';
        breakpointElement.appendChild(breakpointSpace);
        divsClean[i].parentNode.insertBefore(breakpointElement, divsClean[i]);

        // now add the difference to all the divsClean below this one
        for (let o = i + 1; o < divsClean.length; o += 1) {
          printCleanOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsClean[i].offsetHeight)) *
            divsClean[i].offsetHeight;
        }
      }
    }
  }

  const diffTotalOffset =
    printCleanOffsetTops[divsClean.length - 1] - divsClean[divsClean.length - 1].offsetTop;

  for (let i = 0; i < printNeverOffsetTops.length; i += 1) {
    printNeverOffsetTops[i] += diffTotalOffset;
  }

  for (let i = 0; i < divsNever.length; i += 1) {
    const onPage = Math.ceil((printNeverOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printNeverOffsetTops[i] + offset + divsNever[i].offsetHeight);
    const doTheSplit = () => Math.abs(remainderOnNextPage / divsNever[i].offsetHeight) > 0;

    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointElement = document.createElement('div');
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.className = 'breakHere';
        breakpointElement.appendChild(breakpointSpace);
        divsNever[i].parentNode.insertBefore(breakpointElement, divsNever[i]);

        // now add the difference to all the divsNever below this one
        for (let o = i + 1; o < divsNever.length; o += 1) {
          printNeverOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsNever[i].offsetHeight)) *
            divsNever[i].offsetHeight;
        }
      }
    }
  }

  // Apparently we can't calculate the height of elements that have display:none
  // so we show it all on load, insert breakpoints, and then hide what will be printed

  const onlyprint = document.querySelectorAll('div[class*=onlyPrint]');
  for (let i = 0; i < onlyprint.length; i += 1) {
    onlyprint[i].classList.remove('onlyPrint');
    onlyprint[i].classList.add('onlyPrintAfterInject');
  }
  const noprint = document.querySelectorAll('div[class*=noPrintBeforeInject]');
  for (let i = 0; i < noprint.length; i += 1) {
    noprint[i].classList.remove('noPrintBeforeInject');
    noprint[i].classList.add('noPrint');
  }
};

class PageExperience extends Component {
  componentDidMount() {
    insertBreakPoints();
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
