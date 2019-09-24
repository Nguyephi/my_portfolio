import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase'
import '../App.css'
import UseForm from '../services/UseForms'
import validate from '../services/ValidateContactMe'

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
    // const [values, setValues] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value });
    // };

    const sendEmail = async (setInputs) => {
        console.log('fireeeee', inputs)
        await fetch(`${API_KEY}/sendemail`, {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify({
                'name': inputs.name,
                'email': inputs.email,
                'message': inputs.message
            })
        })
        setInputs({})
    }

    // const handleEmail = () => {
    //     sendEmail()
    // setValues({
    //     name: '',
    //     email: '',
    //     message: ''
    // })
    // }
    const { inputs, errors, handleInputChange, handleSubmit } = UseForm(
        sendEmail,
        validate
    );

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
                        <form onSubmit={handleSubmit} className={classes.container} autoComplete="off">
                            {errors.name ? <TextField
                                id='outlined-error'
                                error
                                label="Name"
                                className={classes.textField}
                                value={inputs.name || ''}
                                name='name'
                                onChange={handleInputChange}
                                margin="normal"
                                variant="outlined"
                            /> : <TextField
                                    id='outlined-name'
                                    label="Name"
                                    className={classes.textField}
                                    value={inputs.name || ''}
                                    name='name'
                                    onChange={handleInputChange}
                                    margin="normal"
                                    variant="outlined"
                                />}
                            {errors.name && (
                                <div className="invalid-feedback mt-0 ml-2 d-flex">{errors.name}</div>
                            )}

                            {errors.email ? <TextField
                                id='outlined-error'
                                error
                                label="Email"
                                className={classes.textField}
                                value={inputs.email || ''}
                                name='email'
                                onChange={handleInputChange}
                                margin="normal"
                                variant="outlined"
                            /> : <TextField
                                    id='outlined-name'
                                    label="Email"
                                    className={classes.textField}
                                    value={inputs.email || ''}
                                    name='email'
                                    onChange={handleInputChange}
                                    margin="normal"
                                    variant="outlined"
                                />}
                            {errors.email && (
                                <div className="invalid-feedback mt-0 ml-2 d-flex">{errors.email}</div>
                            )}
                            {errors.message ?
                                <TextField
                                    id="outlined-error"
                                    error
                                    label="Message"
                                    multiline
                                    rows="6"
                                    value={inputs.message || ''}
                                    name='message'
                                    onChange={handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />
                                :
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows="6"
                                    value={inputs.message || ''}
                                    name='message'
                                    onChange={handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />}
                            {errors.message && (
                                <div className="invalid-feedback mt-0 ml-2 d-flex">{errors.message}</div>
                            )}
                            <Button type='submit' color="primary" className={classes.button}>
                                Send Email
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}