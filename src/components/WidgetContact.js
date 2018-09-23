import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
  paperPrint: {
    paddingBottom: theme.spacing.unit * 1,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: '2px',
  },
});

const Contact = props => {
  const { classes, elevation, print } = props;

  const contactObject = (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={elevation}>
          <Typography>Let me tell you how to reach me</Typography>
        </Paper>
      </Grid>
    </Grid>
  );

  const contactPrintObject = (
    <Paper className={classes.paperPrint} elevation={elevation}>
      <Grid container spacing={16} className={classes.experience}>
        <Grid item xs={4} className={classes.left}>
          <Typography variant="headline">Ion Caza</Typography>
        </Grid>
        <Grid item xs={4} className={classes.center}>
          <Typography variant="headline">+1 (248) 250-4056</Typography>
        </Grid>
        <Grid item xs={4} className={classes.right}>
          <Typography variant="headline">let@caza.in</Typography>
        </Grid>
      </Grid>
    </Paper>
  );

  return print ? contactPrintObject : contactObject;
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

Contact.defaultProps = {
  elevation: 2,
  print: 0,
};

export default withStyles(styles)(Contact);
