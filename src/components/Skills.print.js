/* eslint react/no-array-index-key: 0 */ // --> ON

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import skills from '../data/skills';

const styles = theme => ({
  skills: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  skillYears: {
    textAlign: 'center',
  },
  skillNames: {
    textAlign: 'left',
  },
  panelDetails: {
    padding: '8px 0px 0px',
  },
  cell: {
    paddingBottom: theme.spacing.unit * 1,
  },
});

const Skills = props => {
  const { classes, elevation } = props;
  const skillsObject = (
    <Grid container spacing={16} className={classes.skills}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={elevation}>
          {skills.skillCategories.map(category => (
            <Table key={category.id}>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.cell}>
                    <Typography variant="body2" gutterBottom className={classes.mainHeadline}>
                      {category.name}
                    </Typography>
                    {category.skills.map((skill, index) => (
                      <span key={index}>
                        {skill.name}
                        {index !== category.skills.length - 1 && ', '}
                      </span>
                    ))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
          {skills.knowledgeCategories.map(category => (
            <Table key={category.id}>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.cell}>
                    <Typography variant="body2" gutterBottom className={classes.mainHeadline}>
                      {category.name}
                    </Typography>
                    {category.knowledges.map((knowledge, index) => (
                      <span key={index}>
                        {knowledge}
                        {index !== category.knowledges.length - 1 && ', '}
                      </span>
                    ))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
  return skillsObject;
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

Skills.defaultProps = {
  elevation: 2,
};

export default withStyles(styles)(Skills);
