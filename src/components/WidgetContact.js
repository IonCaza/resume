import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  experience: {
    textAlign: 'center',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
});

const Contact = props => {
  const { classes, elevation } = props;

  const contactObject = (
    <Grid container spacing={16} className={classes.experience}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={elevation}>
          <Typography>Let me tell you how to reach me</Typography>
        </Paper>
      </Grid>
    </Grid>
  );

  return contactObject;
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

Contact.defaultProps = {
  elevation: 2,
};

export default withStyles(styles)(Contact);
