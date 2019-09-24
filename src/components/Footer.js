import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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
        window.open('https://github.com/Nguyephi', '_blank')
    }
    const handleFacebook = () => {
        window.open('https://www.facebook.com/isteelyphil', '_blank')
    }
    const handleInstagram = () => {
        window.open('https://www.instagram.com/__phil__nguyen__/', '_blank')
    }
    return (
        <div className={classes.root}>
            <AppBar className='footer-container' position="static" style={{ backgroundColor: '#0F084B', height: '75px' }}>
                <Toolbar className='container footer mt-2 justify-content-between'>
                    <div>
                        <Typography variant="h6" className={classes.title}>
                            <small>© 2019 Philip Nguyen</small>
                        </Typography>
                    </div>
                    <div className='text-center'>
                        <IconButton onClick={handleGithub} color="inherit">
                            <i className="fab fa-github"></i>
                        </IconButton>
                        <IconButton onClick={handleFacebook} color="inherit">
                            <i className="fab fa-facebook"></i>
                        </IconButton>
                        <IconButton onClick={handleInstagram} color="inherit">
                            <i className="fab fa-instagram"></i>
                        </IconButton>
                        <small style={{ paddingLeft: '5px', fontSize: '15px' }}>pronewgen92@gmail.com</small>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}