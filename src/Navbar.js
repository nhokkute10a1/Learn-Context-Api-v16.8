import React, { useContext } from 'react';
import * as MaterialUI from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles'
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext'

const content = {
    english: {
        search: 'Search',
        flag: '🇬🇧 '
    },
    french: { 
        search: 'Chercher',
        flag: '🇫🇷'
    },
    spanish: {
        search: 'Buscar',
        flag: '🇪🇸'
    },
}
function Navbar(props) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const { classes } = props;
    const { search, flag } = content[language];

    return (
        <div className={classes.root}>
            <MaterialUI.AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
                <MaterialUI.Toolbar>
                    <MaterialUI.IconButton className={classes.menuButton} color="inherit">
                        <span>{flag}</span>
                    </MaterialUI.IconButton>
                    <MaterialUI.Typography
                        className={classes.title}
                        variant='h6'
                        color='inherit'>
                        App Title
                        </MaterialUI.Typography>
                    <MaterialUI.Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon} >
                            <MaterialIcon.Search />
                        </div>
                        <MaterialUI.InputBase placeholder={`${search}...`}
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

export default withStyles(styles)(Navbar);