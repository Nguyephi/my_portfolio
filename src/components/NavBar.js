import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const avatar = require('../img/phils-avatar.jpg');

export default function BackToTop(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#0D1B2A', boxShadow: '0px 0px 10px 0px black' }}>
                <div className='container'>
                    <a className="mr-auto navbar-brand d-flex align-items-center" href="/">
                        <img alt="Philip Nguyen" width='60' height='60' src={avatar} style={{ borderRadius: '50%' }} />
                        <h3 id='philip' className='pl-3 text-white'>Philip Nguyen</h3>
                    </a>
                    <button className="navbar-toggler" style={{ border: '1px solid white' }} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav align-items-center text-white ml-auto">
                            <Button href='#featured-projects' color="inherit">Featured Projects</Button>
                            <span id='nav-divider'>|</span>
                            <Button href='#contact-me' color="inherit">Contact me</Button>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="back-to-top-anchor" />
            {/* <AppBar >
                <Toolbar className='container d-flex justify-content-between'>
                    <div className="d-flex align-items-center">
                        <Grid>

                        </Grid>
                        <Typography variant="h5">Philip Nguyen</Typography>
                    </div>
                    <button style={{ border: '1px solid white', }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav">
                            <Button href='#featured-projects' color="inherit">Featured Projects</Button>
                            
                            |
                                <Button href='#contact-me' color="inherit">Contact me</Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar> */}

        </>
    );
}