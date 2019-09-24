export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 3 || values.name.length > 128) {
        errors.name = 'Name needs minimum 3 characters and maximum 128 characters.';
    }
    if (!values.message) {
        errors.message = 'Message is required';
    }
    return errors
};

