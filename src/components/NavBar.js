import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const avatar = require('../img/phils-avatar.jpg');

const useStyles = makeStyles({
    bigAvatar: {
        margin: 10,
        marginRight: 20,
        width: 60,
        height: 60,
    },
});

export default function BackToTop(props) {
    const classes = useStyles();
    return (
        <>
            <AppBar style={{ backgroundColor: '#0D1B2A' }}>
                <Toolbar className='container d-flex justify-content-between'>
                    <div className="d-flex align-items-center">
                        <Grid>
                            <Avatar alt="Philip Nguyen" src={avatar} className={classes.bigAvatar} />
                        </Grid>
                        <Typography variant="h5">Philip Nguyen</Typography>
                    </div>
                    <div>
                        <Button href='#featured-projects' color="inherit">Featured Projects</Button>
                        {/* <Button color="inherit">Resume</Button> */}
                        |
                        <Button href='#contact-me' color="inherit">Contact me</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </>
    );
}