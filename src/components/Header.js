import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import withRoot from './withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Header extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="display1" gutterBottom>
          Ion Caza&apos;s Resume
        </Typography>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Header));
