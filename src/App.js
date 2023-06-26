import { Switch, Route } from 'react-router-dom';
import React,{useContext, useState} from 'react'
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './components/authContext/AuthContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const {token,isLoggedIn} = useContext(AuthContext)


  return (
    
    <Layout>
      <Switch>
       {isLoggedIn &&<Route path='/' exact>
          <HomePage />
        </Route>}

      {!isLoggedIn &&  <Route path='/auth'>
          <AuthPage />
        </Route>}

        {isLoggedIn &&<Route path='/profile'>
          <UserProfile />
        </Route>}
    
        
      </Switch>
    </Layout>
   
  );
}

export default App;
