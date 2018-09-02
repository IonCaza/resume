/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from 'react-to-print';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Experience from './Experience';
import Education from './Education';
import Skills from './Skills.print';
import vars from '../data/general';
import '../styles/Print.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  mainHeadline: {
    paddingLeft: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 3,
  },
  component: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
  nodisplay: {
    display: 'none',
  },
});

class PrintDocument extends React.Component {
  render() {

  const { classes } = this.props;

    return (
      <Grid container spacing={0} className={classes.root} ref={el => (this.componentRef = el)}>
        <Grid item xs={12} className={classes.component}>
          <ReactToPrint
            trigger={() => <a href="#" ref="print">Print this out!</a>}
            content={() => this.componentRef}
          />
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            {vars.content.labelExperience}
          </Typography>
          <Experience />
        </Grid>
        <Grid item xs={6} className={classes.component}>
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            {vars.content.labelSkills}
          </Typography>
          <Skills />
        </Grid>
        <Grid item xs={6} className={classes.component}>
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            <div className="test">test</div>
            {vars.content.labelEducation}
          </Typography>
          <Education />
        </Grid>
      </Grid>
    );
  }
}

PrintDocument.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrintDocument);
