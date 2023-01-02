import React from 'react'
import SignUpForm from './sign-up-form.component'

const SignUp = () => {
  return (
    <div className='pricing__sign-up'>
        <p>Sign up for a <b>discount of up to 15%</b> on all services and licenses. In addition, you will gain access to your account listing all projects that can be sorted into different workspaces for a better overview. Individual projects have a reporting system that gives you a perfect insight into the working phase of your project. You will also surely appreciate an overview of your payments or the ability to download files related to the project (individual version of the song, instrumental without vocals, radio version, etc.).</p>
        <SignUpForm />
        <h3>How to get 15% discount?</h3>
        <p>You will receive the first 5% discount immediately after registration. Then, you can get another 5% by verifying your email address, because it is a key to create a reliable communication channel between me and you. Once we successfully complete the first project that will be properly paid, you will get the final 15% discount.</p>
    </div>
  )
}

export default SignUp
