import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const handleGithub = () => {
        window.location.assign('https://github.com/Nguyephi')
    }

    const handleFacebook = () => {
        window.location.assign('https://www.facebook.com/isteelyphil')
    }

    const handleInstagram = () => {
        window.location.assign('https://www.instagram.com/__phil__nguyen__/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#0F084B' }}>
                <Toolbar className='container footer'>
                    <Typography variant="h6" className={classes.title}>
                        <small>© 2019 Philip Nguyen</small>
                    </Typography>
                    <IconButton onClick={handleGithub} color="inherit">
                        <i class="fab fa-github"></i>
                    </IconButton>
                    <IconButton onClick={handleFacebook} color="inherit">
                        <i class="fab fa-facebook"></i>
                    </IconButton>
                    <IconButton onClick={handleInstagram} color="inherit">
                        <i class="fab fa-instagram"></i>
                    </IconButton>
                    <small style={{ paddingLeft: '5px', fontSize: '15px' }}>pronewgen92@gmail.com</small>

                </Toolbar>
            </AppBar>
        </div >
    );
}