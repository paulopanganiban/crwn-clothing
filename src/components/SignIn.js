import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider, signIn } from '../firebase';
const SignIn = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues?.email)
        console.log(formValues?.password)
        signIn(formValues.email, formValues.password)
    }
    const signInWithGoogle = (e) => {
        e.preventDefault()
        setIsLoading(true)
        auth.signInWithPopup(provider)
            .then(result => {
                setIsLoading(false)
                console.log(result)
                history.push('/')
            })
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
            <h1>Sign in</h1>
            <p>Sign in on the internal platform</p>
            <ButtonsContainer>
                <StyledButton variant="contained">
                    <FacebookIcon />LOGIN WITH FACEBOOK
                </StyledButton>
                {
                    '         '
                }
                <StyledButton variant="contained"
                    disabled={isLoading}
                    // pano po kaya okay na logic for disable and isdirty?
                    onClick={signInWithGoogle}
                >
                    <TagFacesIcon />LOGIN WITH GOOGLE
                </StyledButton>
            </ButtonsContainer>
            <FormContainer>
                <p>or login with email address</p>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={handleChange}
                        value={formValues.email}
                        name="email"
                        type="email"
                        required
                        id="outlined-required"
                        label="Email Address"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        value={formValues.password}
                        name="password"
                        type="password"
                        className="form__textField"
                        required
                        id="filled-password-input"
                        label="Password"
                        variant="outlined"
                    />
                    <StyledButton color="primary" className="form__button" variant="contained"
                        type="submit"
                    >
                        SIGN IN NOW
                    </StyledButton>
                </form>
            </FormContainer>
            <div className="wrapper">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </SignInContainer >
    )
}

export default SignIn
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