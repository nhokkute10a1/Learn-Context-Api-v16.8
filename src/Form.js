import React, { Component } from 'react';
import * as MaterialUI from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext'
import { sign } from 'crypto';


const word = {
    english: {
        email: 'Email',
        password: 'Password',
        remember: 'Remember Me',
        signIn: 'Sign In'
    },
    french: {
        email: 'Adress Èlectronique',
        password: 'Mot de Passe',
        remember: 'Sowviens-toi De Moi',
        signIn: 'Se Connecter'
    },
    spanish: {
        email: 'Correo Electrónico',
        password: 'Contrasena',
        remember: 'Recuérdame',
        signIn: 'Registrance'
    }
}
class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { language,changeLanguage } = this.context;
        const { classes } = this.props;
        const { email,password,remember,signIn } = word[language];
        return (
            <main className={classes.main}>
                <MaterialUI.Paper className={classes.paper}>
                    <MaterialUI.Avatar className={classes.avatar}>
                        <MaterialIcon.LockOutlined />
                    </MaterialUI.Avatar>
                    <MaterialUI.Typography variant='h5'>{sign}</MaterialUI.Typography>
                    <MaterialUI.Select value={language} onChange={changeLanguage}>
                        <MaterialUI.MenuItem value="english">English</MaterialUI.MenuItem>
                        <MaterialUI.MenuItem value="french">French</MaterialUI.MenuItem>
                        <MaterialUI.MenuItem value="spanish">Spanish</MaterialUI.MenuItem>
                    </MaterialUI.Select>
                    <form className={classes.form}>
                        <MaterialUI.FormControl margin='normal' required fullWidth>
                            <MaterialUI.InputLabel htmlFor='email'>{email}</MaterialUI.InputLabel>
                            <MaterialUI.Input id="email" name="email" autoFocus />
                        </MaterialUI.FormControl>
                        <MaterialUI.FormControl margin='normal' required fullWidth>
                            <MaterialUI.InputLabel htmlFor='password'>{password}</MaterialUI.InputLabel>
                            <MaterialUI.Input id="password" name="password" autoFocus />
                        </MaterialUI.FormControl>
                        <MaterialUI.FormControlLabel
                            control={<MaterialUI.Checkbox color='primary' />}
                            label={remember} />
                        <MaterialUI.Button
                            variant='contained'
                            type="submit"
                            fullWidth
                            color="primary"
                            className={classes.submit}
                        >
                            {signIn}
                            </MaterialUI.Button>
                    </form>
                </MaterialUI.Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);