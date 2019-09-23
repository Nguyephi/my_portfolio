import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css'

let API_KEY;
if (process.env.NODE_ENV === 'production') {
    API_KEY = process.env.REACT_APP_API_PROD
} else {
    API_KEY = process.env.REACT_APP_API
}


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));


export default function ContactMe() {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const sendEmail = async () => {
        await fetch(`${API_KEY}/sendemail`, {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify({
                'name': values.name,
                'email': values.email,
                'message': values.message
            })
        })
    }

    const handleEmail = (e) => {
        sendEmail()
    }

    return (
        <>
            <div style={{ boxShadow: 'inset 0 0 17px 2px', height: 100, backgroundColor: '#0D0221', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ color: 'white' }}>
                    CONTACT ME
                </h2>
            </div>
            <div>
                <div className='container my-5 contact-form'>
                    <div data-aos="zoom-in">
                        <form className={classes.container} autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={values.name}
                                onChange={handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-name"
                                label="Email address"
                                className={classes.textField}
                                value={values.email}
                                onChange={handleChange('email')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows="6"
                                defaultValue={values.message}
                                onChange={handleChange('message')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <Button type='submit' onClick={(e) => handleEmail(e)} color="primary" className={classes.button}>
                                Send Email
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}