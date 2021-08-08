import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserStates } from '../../App';
import appleLogo from "../../assets/appleLogo.png";
import fbLogo from "../../assets/fblogo.png";
import googleLogo from "../../assets/googleLogo.png";
import "../../Css/Login.css";

function Login() {
    const { UserLogin } = useContext(UserStates)
    const { LoggedIn, seLoggedIn } = UserLogin
    const [newUser, setNewUser] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (

        <div className="Form-Container">
            <div className="heading">
                <span >
                    {
                        newUser ? "Join with use for more exciting feature" : "Hello, wellcome back"
                    }
                </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    newUser ? <div><input type="text" placeholder="Your Surename" {...register("Surename", { required: true })} /> <br /></div> : null
                }

                {errors.Surename && <span className="blankInputAlert">Surename de da bhai</span>}
                <br />
                <input type="text" placeholder="Enter username" {...register("userName", { required: true })} />
                <br />
                {errors.userName && <span className="blankInputAlert">Username de da bhai</span>}
                <br />
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
                <br />
                {errors.password && <span className="blankInputAlert">Password de da bhai</span>}
                <br />

                {
                    newUser ? null : <div><Link className="forget-pass">Forget password</Link><br /></div>
                }

                <button type="submit">{newUser ? "Singup" : "Login"}</button>
            </form>
            <div className="other-signin-heading">
                <p>Other Sign in methods</p>
            </div>
            <div className="other-signin-option">
                <div><img src={googleLogo} alt="GoogleLogo" /></div>
                <div><img src={fbLogo} alt="FacebookLogo" /></div>
                <div><img src={appleLogo} alt="AppleLogo" /></div>
            </div>
            <div className="create-newacc">
                {
                    newUser ? <span>Already have an account? <button onClick={() => setNewUser(false)}>Login here</button></span> : <span>Dont have account? <button onClick={() => setNewUser(true)}>Create one</button></span>

                }
            </div>
        </div>
    )
}

export default Login
