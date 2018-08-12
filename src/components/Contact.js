import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withRoot from './withRoot';
import contact from '../data/contact';

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

const Contact = props => {
  const { classes } = props;

  const contactObject = (
    <Grid container spacing={0} className={classes.root}>
      <Grid item md={8}>
        <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
          {contact.label.header}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Grid container spacing={0}>
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            {contact.label.location}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return contactObject;
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Contact));
