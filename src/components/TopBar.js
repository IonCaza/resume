/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/MenuSharp';
import PrintIcon from '@material-ui/icons/PrintSharp';
import SaveIcon from '@material-ui/icons/SaveAltSharp';

import withRoot from './withRoot';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  flex: {
    flexGrow: 1,
    // textAlign: 'center',
  },
  drawer: {
    position: 'fixed',
    top: 0,
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 10,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  },
});

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { drawerIsOpen } = this.state;
    const { classes, toggleDrawer, drawerIsOpen } = this.props;
    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: drawerIsOpen,
          [classes['appBarShift-left']]: drawerIsOpen,
        })}
      >
        <Toolbar disableGutters={!drawerIsOpen}>
          <IconButton
            className={classNames(classes.menuButton, drawerIsOpen && classes.hide)}
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Ion Caza&apos;s Resume
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Print">
            <PrintIcon />
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Download PDF">
            <SaveIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerIsOpen: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TopBar));
