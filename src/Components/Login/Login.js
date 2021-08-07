import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserStates } from '../../App';
import "../../Css/Login.css";

function Login() {
    const { UserLogin } = useContext(UserStates)
    const { LoggedIn, seLoggedIn } = UserLogin

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (

        <div className="LoginForm-Container">
            <span className="heading">Join with use for more exciting feature</span>
            {/* <p>Hello Again</p> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter username" {...register("userName", { required: true })} />

                <br />{errors.password && <span className="blankInputAlert">Username de da bhai</span>} <br />

                <input type="password" placeholder="Password" {...register("password", { required: true })} />

                <br /> {errors.password && <span className="blankInputAlert">Password de da bhai</span>} <br />




                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login
