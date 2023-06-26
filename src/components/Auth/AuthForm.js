import { useState, useRef,useContext } from "react";
import {useHistory} from 'react-router-dom'
import classes from "./AuthForm.module.css";
import AuthContext from "../authContext/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {updateTheToken,isLoggedIn, token} = useContext(AuthContext)

  const [formField, setFormIsField] = useState(true);
  const enteredEmail = useRef();
  const enteredPassword = useRef();


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!enteredEmail.current.value || !enteredPassword.current.value) {
      setFormIsField(false);
    }


    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;


    if (isLogin) {
     

      try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5If4UQSZHnIQzV-xdarlycpFyo331foQ', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if(response.status === 'ok'){
          useHistory.replace('/')
        }
        const data = await response.json();
        updateTheToken(data.token)
        console.log(data)
      } catch (err) {
        console.log(err)
    
      }


    } else {
      try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5If4UQSZHnIQzV-xdarlycpFyo331foQ', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json();
        console.log(data)
      } catch (err) {
        console.log(err)
      
      }

    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={enteredEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={enteredPassword} required />
        </div>
       
        <div className={classes.actions}>
      
          <button

            type="submit">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
