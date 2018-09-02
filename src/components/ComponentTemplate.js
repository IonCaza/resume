import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  // insert styles here
});

class ComponentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    const componentNameObject = (
      // insert component here
    );

    return componentNameObject;
  }
}

ComponentName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentName);
