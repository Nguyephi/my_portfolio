import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function checkGithub() {

    const handlePageToGithub = () => {
        window.open('https://github.com/Nguyephi?tab=repositories', '_blank')
    }

    return (
        <div className='container' style={{ width: '100vw', height: 100 }}>
            <Row style={{ marginTop: 20, marginBottom: 20, width: '100%', height: '100%', alignItems: 'center', textAlign: 'center' }}>
                <Col md={6} style={{ textAlign: 'center' }}>
                    <div data-aos="fade-right">
                        <h3>CHECK OUT MY GITHUB</h3>
                    </div>
                </Col>
                <Col>
                    <div data-aos="fade-left">
                        <button
                            style={{ width: 300, textAlign: 'center' }}
                            type='button'
                            className='githubBtn btn--Github'
                            onClick={handlePageToGithub}>
                            My Github
                        </button>
                    </div>
                </Col>
            </Row>
            <hr />
        </div>
    )
}