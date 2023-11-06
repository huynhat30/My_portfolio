import { useRef } from 'react'
import { useUserContext } from '../../context/userContext';
import './login.scss'

const Login = () => {
    const passRef = useRef();
    const emailRef = useRef();

    const { signInUser, forgetPassword } = useUserContext()

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        if(email && password) {
            signInUser(email, password)
        }
    }

    const forgotPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            forgetPassword(email).then(() => (emailRef.current.value = ""))
        }
    }

    return (
        <div className="dashboard_login">
        <h1>Greeting, are you the Admin?</h1>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef}/>
                <input placeholder="Password" type="password" ref={passRef} required/>
                <button type="submit">Sign in</button>
                <p onClick={forgotPassword}>Oh no, forgot the password?</p> 
            </form>
        </div>
    )

}

export default Login