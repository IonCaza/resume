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

import withRoot from './withRoot';
import skills from '../data/skills';

const styles = theme => ({
  skills: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
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
});

const Skills = props => {
  const { classes } = props;
  const skillsObject = (
    <div className={classes.skills}>
      {skills.skillCategories.map(category => (
        <ExpansionPanel key={category.id}>
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
        <ExpansionPanel key={category.id}>
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
  return skillsObject;
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Skills));
