import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Experience from './Experience';
import Skills from './Skills';
import withRoot from './withRoot';

const styles = () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

const Content = props => {
  const { classes } = props;

  const content = (
    <Grid container spacing={24} className={classes.root}>
      <Grid item xs={8}>
        <Experience />
      </Grid>
      <Grid item xs={4}>
        <Skills />
      </Grid>
    </Grid>
  );

  return content;
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Content));
