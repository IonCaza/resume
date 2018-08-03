import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import '../styles/Navigation.scss';

import App from './App';
import TopBar from './TopBar';
import LeftNav from './LeftNav';
import withRoot from './withRoot';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
    };
    this.closeDrawer = this.toggleDrawer.bind(this, false);
    this.openDrawer = this.toggleDrawer.bind(this, true);
  }

  toggleDrawer = tf => {
    this.setState({
      drawerIsOpen: tf,
    });
  };

  render() {
    const { classes } = this.props;
    const { drawerIsOpen } = this.state;

    return (
      <div className={classes.root}>
        <TopBar toggleDrawer={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
        <LeftNav toggleDrawer={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
        <main
          className={classNames(classes.content, classes['content-left'], {
            [classes.contentShift]: drawerIsOpen,
            [classes['contentShift-left']]: drawerIsOpen,
          })}
        >
          <Switch>
            <Route path="/" exact component={App} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Navigation));
