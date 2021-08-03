import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { auth, createUserProfileDocument } from '../firebase';
function SignUp() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (formValues.password !== formValues.password2) {
            alert(`Passwords don't match`)
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(formValues.email, formValues.password)
          
            await createUserProfileDocument(user, formValues.firstName)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <SignInContainer
            initial={{
                marginTop: -999,
            }}
            animate={{
                marginTop: 0,
                opacity: 1,
            }}
        >
            <h1>Create new account</h1>
            <p>Use your email to create a new account</p>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={handleChange}
                        name="firstName"
                        value={formValues.firstName}
                        className="form__textField"
                        required
                        id="outlined-required"
                        label="First name"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        name="lastName"
                        value={formValues.lastName}
                        className="form__textField"
                        required
                        id="outlined-required"
                        label="Last name"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        name="email"
                        value={formValues.email}
                        className="form__textField"
                        type="email"
                        required
                        id="outlined-required"
                        label="Email Address"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={formValues.password}
                        className="form__textField"
                        required
                        id="filled-password-input"
                        label="Password"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        name="password2"
                        type="password"
                        value={formValues.password2}
                        className="form__textField"
                        required
                        id="filled-password-input"
                        label="Password"
                        variant="outlined"
                    />
                    <StyledButton className="form__button" variant="contained"
                        type="submit"
                    >
                        SIGN UP NOW
                    </StyledButton>
                </form>
            </FormContainer>
            <div className="wrapper">
                <p>Have an account? <Link to="/signin">Sign in</Link></p>
            </div>
        </SignInContainer>
    )
}

export default SignUp
const FormContainer = styled.div`
margin-top: 10px;
 > p {
     display: flex;
     justify-content: center;
     color: gray;
 }
 > form {
     margin-top: 10px;
     display: flex;
     flex-direction: column;
 }
 > form > .form__textField {
     margin-top: 10px;
 }
 > form > .form__button {
     margin-top: 10px;
 }
 `
const StyledButton = styled(Button)`
`
const ButtonsContainer = styled.div`
margin-top: 20px;
`
const SignInContainer = styled(motion.div)`
margin: auto;
width: 50%;
display: flex;
flex-direction: column;
min-width: 600px;
 > p {
     color: gray;
     font-size: 15px;
 }
 > .wrapper {
     margin-top: 10px;
 }
 > .wrapper > p {
     color: gray;
 }
`