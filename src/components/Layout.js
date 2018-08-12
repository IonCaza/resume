import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Hidden from '@material-ui/core/Hidden';

import TopBar from './TopBar';
import LeftNav from './LeftNav';
import withRoot from './withRoot';
import Content from './Content';
import Contact from './Contact';
import '../styles/Layout.scss';

const drawerWidth = 240;

const styles = theme => ({
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
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: 0,
  },
  contentShift: {
    [theme.breakpoints.up('md')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  'contentShift-left': {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
});

class Layout extends Component {
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
      <BrowserRouter>
        <div className={classes.root}>
          <TopBar toggleDrawer={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
          <Hidden mdUp>
            <LeftNav
              toggleDrawer={this.toggleDrawer}
              drawerIsOpen={drawerIsOpen}
              variant="temporary"
            />
          </Hidden>
          <Hidden smDown>
            <LeftNav
              toggleDrawer={this.toggleDrawer}
              drawerIsOpen={drawerIsOpen}
              variant="persistent"
            />
          </Hidden>
          <main
            className={classNames(classes.content, classes['content-left'], {
              [classes.contentShift]: drawerIsOpen,
              [classes['contentShift-left']]: drawerIsOpen,
            })}
          >
            <Switch>
              <Route path="/" exact component={Content} />
              <Route path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
