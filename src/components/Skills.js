import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import withRoot from './withRoot';

const styles = () => ({
  // insert styles here
});

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    const skills = (
      // insert component here
    );

    return skills;
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Skills));
