import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Obfuscate from 'react-obfuscate';

import Layout from './NavLayout';

import contact from '../data/contact';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingTop: theme.spacing.unit * 10,
  },
  mainHeadline: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 2,
    },
  },
  secondaryItems: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },

    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing.unit,
    },
  },
  contactItems: {
    textAlign: 'center',
  },
});

const PageContact = props => {
  const { classes } = props;

  const contactObject = (
    <Grid container spacing={0} className={classes.root}>
      <Grid item md={8}>
        <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
          {contact.label.header}
        </Typography>
        <Typography variant="subheading" gutterBottom className={classes.mainHeadline}>
          {contact.content.introMessage}
        </Typography>
        <Grid container spacing={0} className={classes.contactItems}>
          <Grid item md={6}>
            <Typography variant="title" gutterBottom className={classes.mainHeadline}>
              {contact.label.phone}: &nbsp;
              <Obfuscate tel={contact.info.phone}>
                <Button variant="contained" color="primary" className={classes.button}>
                  {contact.info.phone}
                </Button>
              </Obfuscate>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="title" gutterBottom className={classes.mainHeadline}>
              {contact.label.email}: &nbsp;
              <Obfuscate
                email={contact.info.email}
                headers={{
                  subject: "Let's get in touch",
                }}
              >
                <Button variant="contained" color="primary" className={classes.button}>
                  {contact.info.email}
                </Button>
              </Obfuscate>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Grid container spacing={0}>
          <Typography variant="display1" gutterBottom className={classes.mainHeadline}>
            {contact.label.location}
          </Typography>
          <Typography variant="title" gutterBottom className={classes.mainHeadline}>
            {contact.info.location}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout>{contactObject}</Layout>;
};

PageContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageContact);
