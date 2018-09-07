import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/MenuSharp';
import PrintIcon from '@material-ui/icons/PrintSharp';

import vars from '../data/general';
import '../styles/Print.scss';

const { drawerWidth } = vars.app;

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // [theme.breakpoints.up('md')]: {
    // zIndex: '0 !important',
    // },
  },
  appBarShift: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  'appBarShift-left': {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
  leftButton: {
    marginLeft: 8,
    marginRight: 12,
    // zIndex: '1100 !important',
  },
  rightButton: {
    marginLeft: 0,
    marginRight: 8,
    // zIndex: '1100 !important',
  },
  hide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.toggleLocal.bind(this, true);
  }

  shouldComponentUpdate(nextProps) {
    const { drawerIsOpen } = this.props;
    return nextProps.drawerIsOpen !== drawerIsOpen;
  }

  /* printComp() {
    return (
      <Hidden xsUp>
        <Print />
      </Hidden>
    ); // ref={el => (this.componentRef = el)}
  } */

  toggleLocal = tf => {
    const { toggleDrawer } = this.props;
    toggleDrawer(tf);
  };

  render() {
    const { drawerIsOpen, classes, path } = this.props;

    const PrintButton = () => {
      if (vars.printablePaths.indexOf(path) > -1) {
        return (
          <IconButton className={classes.rightButton} color="inherit" aria-label="Print">
            <PrintIcon />
          </IconButton>
        );
      }
      return '';
    };

    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: drawerIsOpen,
          [classes['appBarShift-left']]: drawerIsOpen,
        })}
      >
        <Toolbar disableGutters={!drawerIsOpen}>
          <IconButton
            className={classNames(classes.leftButton, drawerIsOpen && classes.hide)}
            color="inherit"
            aria-label="Menu"
            onClick={this.openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {vars.app.topBarTitle}
          </Typography>
          <div
            onClick={() => window.print()}
            onKeyPress={() => window.print()}
            role="button"
            tabIndex={0}
          >
            <PrintButton />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default withStyles(styles)(TopBar);
