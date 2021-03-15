import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import MealSelection from './components/MealSelection';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import MealConfirmation from './components/MealConfirmation';
import Environment from './components/Environment';
import NavBar from './components/NavBar'
import Gamification from './components/Gamification';
import './App.css';
import './assets/styles/styles.scss';
import library from './assets/data/fa-library';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <AboutUs />

     {/*  <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route path='/navbar'>
            <NavBar />
          </Route>
          <Route path='/mealselection'>
            <MealSelection />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/aboutus'>
            
          </Route>
          <Route path='/mealconfirmation'>
            <MealConfirmation />
          </Route>
          <Route path='/environment'>
            <Environment />
          </Route>
          <Route path='/gamification'>
            <Gamification />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}
export const testFunction = () => {
  return "All Good"
}
export default App;
