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
  flex: {
    flexGrow: 1,
    // textAlign: 'center',
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
  leftButton: {
    marginLeft: 8,
    marginRight: 12,
  },
  rightButton: {
    marginLeft: 0,
    marginRight: 8,
  },
  hide: {
    display: 'none',
  },
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: props.drawerIsOpen,
    };
    this.openDrawer = this.toggleLocal.bind(this, true);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ drawerIsOpen: nextProps.drawerIsOpen });
  }

  toggleLocal = tf => {
    this.setState({ drawerIsOpen: tf });
    const { toggleDrawer } = this.props;
    toggleDrawer(tf);
  };

  render() {
    const { drawerIsOpen } = this.state;
    const { classes } = this.props;
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
            Ion Caza&apos;s Resume
          </Typography>
          <IconButton
            className={classes.rightButton}
            color="inherit"
            aria-label="Print"
            disabled="true"
          >
            <PrintIcon />
          </IconButton>
          <IconButton
            className={classes.rightButton}
            color="inherit"
            aria-label="Download PDF"
            disabled="true"
          >
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
  drawerIsOpen: PropTypes.bool.isRequired,
};

export default withRoot(withStyles(styles)(TopBar));
