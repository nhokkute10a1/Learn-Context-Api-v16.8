import React, { Component } from 'react';
import * as MaterialUI from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles'

class Form extends Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <MaterialUI.Paper className={classes.paper}>
                    <MaterialUI.Avatar className={classes.avatar}>
                        <MaterialIcon.LockOutlined />
                    </MaterialUI.Avatar>
                    <MaterialUI.Typography variant='h5'>Sign In</MaterialUI.Typography>
                    <MaterialUI.Select value="english">
                        <MaterialUI.MenuItem value="english">English</MaterialUI.MenuItem>
                        <MaterialUI.MenuItem value="french">French</MaterialUI.MenuItem>
                        <MaterialUI.MenuItem value="spanish">Spanish</MaterialUI.MenuItem>
                    </MaterialUI.Select>
                    <form className={classes.form}>
                        <MaterialUI.FormControl margin='normal' required fullWidth>
                            <MaterialUI.InputLabel htmlFor='email'>Email</MaterialUI.InputLabel>
                            <MaterialUI.Input id="email" name="email" autoFocus />
                        </MaterialUI.FormControl>
                        <MaterialUI.FormControl margin='normal' required fullWidth>
                            <MaterialUI.InputLabel htmlFor='password'>Password</MaterialUI.InputLabel>
                            <MaterialUI.Input id="password" name="password" autoFocus />
                        </MaterialUI.FormControl>
                        <MaterialUI.FormControlLabel
                            control={<MaterialUI.Checkbox color='primary' />}
                            label="Remember Me" />
                        <MaterialUI.Button
                            variant='contained'
                            type="submit"
                            fullWidth
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                            </MaterialUI.Button>
                    </form>
                </MaterialUI.Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);