/* eslint react/no-array-index-key: 0 */ // --> ON

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
  const { classes, elevation, print } = props;
  const skillsObject = (
    <div className={classes.skills}>
      {skills.skillCategories.map(category => (
        <ExpansionPanel key={category.id} defaultExpanded={category.open} elevation={elevation}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{category.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panelDetails}>
            <Table>
              <TableBody>
                {category.skills.map(skill => (
                  <TableRow key={skill.id}>
                    <TableCell component="th" scope="row" className={classes.skillNames}>
                      {skill.name}
                    </TableCell>
                    <TableCell numeric className={classes.skillYears}>
                      {skill.level}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      {skills.knowledgeCategories.map(category => (
        <ExpansionPanel key={category.id} defaultExpanded={category.open} elevation={elevation}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{category.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panelDetails}>
            <Table>
              <TableBody>
                {category.knowledges.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" className={classes.skillNames}>
                      {skill}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );

  const skillsPrintObject = (
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
  return print ? skillsPrintObject : skillsObject;
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

Skills.defaultProps = {
  elevation: 2,
  print: 0,
};

export default withStyles(styles)(Skills);
