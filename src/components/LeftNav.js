import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import LinkIcon from '@material-ui/icons/Link';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import withRoot from './withRoot';
import packageJson from '../../package';
import links from '../data/links';

const mainItems = (
  <div>
    <ListItem button component={Link} to="/exp">
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Experience" />
    </ListItem>
  </div>
);

const linkItems = props => {
  const { classes } = props;
  return (
    <div>
      {links.map(link => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.a}
          key={link.id}
        >
          <ListItem button>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItem>
        </a>
      ))}
    </div>
  );
};

const drawerWidth = 240;

const styles = () => ({
  drawer: {
    position: 'fixed',
    top: 0,
    // [theme.breakpoints.up('md')]: {
    zIndex: `1 !important`,
    // },
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
    height: '64px',
  },
  name: {
    textAlign: 'left',
    left: '-12px',
    position: 'relative',
  },
  a: {
    textDecoration: 'none',
  },
});

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: props.variant,
    };
    this.closeDrawer = this.toggleLocal.bind(this, false);
  }

  shouldComponentUpdate(nextProps) {
    const { drawerIsOpen } = this.props;
    return nextProps.drawerIsOpen !== drawerIsOpen;
  }

  toggleLocal = tf => {
    const { toggleDrawer } = this.props;
    toggleDrawer(tf);
  };

  render() {
    const { variant } = this.state;
    const { drawerIsOpen, classes } = this.props;

    const drawer = (
      <Drawer
        variant={variant}
        anchor={variant === 'temporary' ? 'left' : undefined}
        open={drawerIsOpen}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={
          variant === 'temporary'
            ? {
                keepMounted: true, // Better open performance on mobile.
              }
            : undefined
        }
      >
        <div className={classes.drawerHeader}>
          <Typography variant="title" className={classes.name} align="left">
            {packageJson.name} {packageJson.version}
          </Typography>
          &nbsp;
          <IconButton onClick={this.closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainItems}</List>
        <Divider />
        <List>{linkItems(this.props)}</List>
      </Drawer>
    );

    return drawer;
  }
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

linkItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(LeftNav));
