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

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function FeaturedProjects() {
    const classes = useStyles()
    return (
        <div style={{ marginTop: 70 }}>
            <h2 className='text-center mb-5'>FEATURED PROJECTS</h2>
            <Row className='mb-5'>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <div data-aos="flip-right">
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Cookthis
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This project I worked on is a basic replica of instagram, but for foodies. This project uses react for the front-end and python for the backend.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Live
                                </Button>
                                <Button size="small" color="primary">
                                    Repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <div data-aos="flip-left">
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
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
                                <Button size="small" color="primary">
                                    Live
                                </Button>
                                <Button size="small" color="primary">
                                    Repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}