import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CookthisDemo = require('../img/CookthisDemo.gif')
const PhilsMoviesDemo = require('../img/PhilsMoviesDemo.gif')

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 170,
    },
});

export default function FeaturedProjects() {
    const classes = useStyles()

    const handleCookthisLive = () => {
        window.open('https://cookthis.netlify.com', '_blank')
    }
    const handleCookthisRepo = () => {
        window.open('https://github.com/Nguyephi/Cook-this-app', '_blank')
    }
    const handlePhilsMoviesLive = () => {
        window.open('https://phils-movies.netlify.com/', '_blank')
    }
    const handlePhilsMoviesRepo = () => {
        window.open('https://github.com/Nguyephi/movie-app2', '_blank')
    }

    return (
        <div className='container' style={{ marginTop: 70 }}>
            <h2 className='text-center mb-5'>FEATURED PROJECTS</h2>
            <Row className='project-cards'>
                <Col className='mb-5' style={{ display: ' flex', justifyContent: 'center' }}>
                    <div data-aos="flip-right">
                        <Card className={classes.card}>
                            <CardActionArea onClick={handleCookthisLive}>
                                <CardMedia
                                    className={classes.media}
                                    image={CookthisDemo}
                                    title="CookthisDemo.gif"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Cookthis
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A project that models after instagram, but for foodies. This project uses react for the front-end and python for the backend.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={handleCookthisLive} size="small" color="primary">
                                    Live
                                </Button>
                                <Button onClick={handleCookthisRepo} size="small" color="primary">
                                    Repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Col>
                <Col className='mb-5' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div data-aos="flip-left">
                        <Card className={classes.card}>
                            <CardActionArea onClick={handlePhilsMoviesLive}>
                                <CardMedia
                                    className={classes.media}
                                    image={PhilsMoviesDemo}
                                    title="PhilsMoviesDemo.gif"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Movie app
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This was a project using react to create a movie app with a free third-party api. This project also uses react's latest hooks features.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={handlePhilsMoviesLive} size="small" color="primary">
                                    Live
                                </Button>
                                <Button onClick={handlePhilsMoviesRepo} size="small" color="primary">
                                    Repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div >
    )
}