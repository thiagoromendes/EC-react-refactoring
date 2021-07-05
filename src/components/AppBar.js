import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBar from './MenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 60
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar variant="dense" className={classes.toolbar}>
          <MenuBar>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="action" 
                aria-label="menu">
                <MenuIcon />
            </IconButton>
          </MenuBar>
          <Typography variant="h6" color="inherit">
            React Refactoring
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export {DenseAppBar as AppBar}