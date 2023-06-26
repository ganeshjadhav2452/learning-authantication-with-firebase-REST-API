import React,{useState} from 'react'
import AuthContext from './AuthContext'
import {useHistory} from 'react-router-dom'
function AuthcontextProvider(props) {

    const [token, setToken] = useState('');
    const history = useHistory();
    const updateTheToken = (receviedToken) => {
        setToken(receviedToken)
    }
    const isLoggedIn = token === '' ? false : true;

    const logoutHandler = () => {

        setToken('')
        history.replace('/auth')
        console.log(token)

    }
    return (
        <AuthContext.Provider value={{ token, updateTheToken, isLoggedIn, logoutHandler }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthcontextProvider