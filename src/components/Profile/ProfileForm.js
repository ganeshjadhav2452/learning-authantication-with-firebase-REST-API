import classes from './ProfileForm.module.css';
import React, { useRef, useContext } from 'react';
import AuthContext from '../authContext/AuthContext';
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {
  const newPassRef = useRef();
  const { token } = useContext(AuthContext)

  const history = useHistory()


  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredNewpass = newPassRef.current.value;

    if (!enteredNewpass) {
      <p>this Filed cant be empty!</p>

    }
    else {
      
      try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA5If4UQSZHnIQzV-xdarlycpFyo331foQ', {
          method: 'POST',
          body: JSON.stringify({
            idToken: localStorage.getItem('token'),
            password: enteredNewpass,
            returnSecureToken: false
          }),
          headers: {
            'Content-Type': 'application/json'
          }

        })

        if (response.status === 'ok') {
          // history.replace('/auth')
          console.log('your password changed successfully')
        }
        const data = await response.json();
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPassRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
