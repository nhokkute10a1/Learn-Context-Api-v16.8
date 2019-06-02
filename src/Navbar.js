import React, { Component } from 'react';
import * as MaterialUI from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles'

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MaterialUI.AppBar position="static" color="primary">
                    <MaterialUI.Toolbar>
                        <MaterialUI.IconButton lassName={classes.menuButton} color="inherit">
                            <span>🇫🇷</span>
                        </MaterialUI.IconButton>
                        <MaterialUI.Typography
                            className={classes.title}
                            variant='h6'
                            color='inherit'>
                            App Title
                        </MaterialUI.Typography>
                        <MaterialUI.Switch />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon} >
                                <MaterialIcon.Search />
                            </div>
                            <MaterialUI.InputBase placeholder='Search...'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }} 
                            />
                        </div>
                    </MaterialUI.Toolbar>
                </MaterialUI.AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);