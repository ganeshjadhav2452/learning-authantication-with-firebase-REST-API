import { Link } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../authContext/AuthContext';
const MainNavigation = () => {

  const {logoutHandler} = useContext(AuthContext)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
