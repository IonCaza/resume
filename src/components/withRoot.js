import React from 'react';
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

function withRoot(Component) {
  return class extends React.Component { /* eslint-disable-line */
    // component has to be stateful for react-to-print
    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component />
        </MuiThemeProvider>
      );
    }
  };
}

export default withRoot;
