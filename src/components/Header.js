import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import '../styles/Header.scss';

import withRoot from './withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Not something it is not
      </Typography>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Header));
