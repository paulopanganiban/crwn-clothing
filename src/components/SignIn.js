import React, { useState } from 'react'
import FormInput from './FormInput'
import '../styles/sign-in.styles.scss'
import CustomButton from './CustomButton'
import { auth, provider } from '../firebase'
const SignIn = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    function signInWithGoogle(e) {
        e.preventDefault()
        setIsLoading(true)
        auth.signInWithPopup(provider)
        .then(result => {
            setIsLoading(false)
        })
    }
    function onHandleChange(e) {
        const { value, name } = e.target
        // setState({[e.target.name]: e.target.value})
        setFormValues({ [name]: value })
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" value={formValues.email} name="email" required
                    handleChange={onHandleChange}
                    label='email'
                />
                <FormInput type="password" value={formValues.password} name="password" required
                    handleChange={onHandleChange}
                    label='password'
                />

                <CustomButton type="submit" value="Submit form">Sign in</CustomButton>{' '}
                <CustomButton disabled={isLoading} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
            </form>
        </div>
    )
}

export default SignIn