import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import '../styles/sign-in-sign-up.styles.scss'
const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp