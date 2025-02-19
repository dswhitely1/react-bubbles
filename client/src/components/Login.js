import React, {useEffect, useState} from "react";
import axios from 'axios';

const Login = (props) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    useEffect(()=> {
        const token = JSON.parse(localStorage.getItem('bubbles'));
        if (token) {
            props.history.push('/bubbles')
        }
    }, [])

    function handleChange({target: {name, value}}) {
        setValues({...values, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/login', values)
            .then(res => {
                localStorage.setItem('bubbles', JSON.stringify(res.data.payload))
                props.history.push('/bubbles')
            })
            .catch(err => console.log(err.response));
    }
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    return (
        <>
            <h1>Welcome to the Bubble App!</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: <input name='username' value={values.username} onChange={handleChange}/></label>
                <label>Password: <input type="password" name='password' value={values.password}
                                        onChange={handleChange}/></label>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default Login;
