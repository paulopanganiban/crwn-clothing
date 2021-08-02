import React, { useState } from 'react'
import { auth, createUserProfileDocument } from '../firebase'
import '../styles/sign-up.styles.scss'
import CustomButton from './CustomButton'
import FormInput from './FormInput'
const SignUp = () => {
    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [user, setUser] = useState(initialState)
    async function handleSubmit(e) {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = user
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            setUser(initialState)
        } catch (error) {
            console.error(error)
        }
    }
    function handleChange(e) {
        const { value, name } = e.target
        // setState({[e.target.name]: e.target.value})
        setUser({ [name]: value })
        console.log(user)
    }
    return (
        <div className='sign-up'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={user.displayName}
                    onChange={handleChange}
                    label='Display name'
                    required
                ></FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    label='Email'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    label='Password'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={user.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                ></FormInput>
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
