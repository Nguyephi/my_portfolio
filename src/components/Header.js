import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../App.css'

const headerBackground = require('../img/header-background.png');
const headerFullBackground = require('../img/header-full-background.jpg');

export default function Header() {
    return (
        <div id='header-background' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1B263B',
            backgroundImage: `url(${headerFullBackground})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '36rem'
        }}>
            <div style={{ width: '100%', position: 'absolute', right: 15, top: 330 }}>
                <div data-aos="fade-up-right">
                    <img id='wolf' width='250px' src={headerBackground} alt='header-background' />
                </div>
            </div>
            <Row style={{ height: '100%' }}>
                <Col md={3} className='emptySpace'>
                </Col>
                <Col md={9} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div data-aos="fade-up">
                        <div id="header" style={{ width: '30rem', textAlign: 'center' }}>
                            <h1 style={{ color: 'white' }}>PHILIP NGUYEN</h1>
                            <h4 style={{ color: 'white' }}>FULL-STACK WEB DEVELOPER</h4>
                            <a id='CV-btn' href='https://docs.google.com/document/d/1ujAfq2jgFEdaNYcuaigo72so4c4lT6IJQm5wQjKof7A/edit' target="_blank">
                                My Curriculum Vitae <i class="pl-2 fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

