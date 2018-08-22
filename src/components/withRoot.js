import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    palette: {
      primary: blue,
      secondary: red,
    },
  },
});

class WithRoot extends Component { /* eslint-disable-line */
  // component has to be stateful for react-to-print
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }
}

WithRoot.propTypes = {
  children: PropTypes.object.isRequired,
};

export default WithRoot;
