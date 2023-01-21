import React from 'react'
import CartContext from '../Store/CartContext';
import NavigationBar from '../Components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { useContext, useRef,Fragment } from 'react';

const Login = () => {
    const emailInputRef = useRef("");
    const passwordInputRef = useRef("");
    const cartCtx = useContext(CartContext);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        // console.log(enteredEmail);
        // console.log(enteredPassword)

        fetch(
            "https://e-commerce-project-4b6e6-default-rtdb.firebaseio.com/userDetails.json",
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    "Content-Type": "login/json",
                },
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    response.json().then((data) => {
                        // console.log(data.error.message)
                        let errorMessage = data.error.message;
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                cartCtx.login(data.idToken);
                history.replace("/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
            <Fragment>
                <NavigationBar></NavigationBar>
                <div className="form-div shadow">
                    <h2 className="text-center">login</h2>
                    <form onSubmit={submitHandler}>
                        <div className="control">
                            <label>Email</label>
                            <input type="email" ref={emailInputRef}></input>
                        </div>
                        <div className="control">
                            <label>Password</label>
                            <input type="password" ref={passwordInputRef}></input>
                        </div>
                        <div className="actions">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </Fragment>
    );
}

export default Login