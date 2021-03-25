import React, { useState , useEffect } from 'react';
import Timer from './Timer';
import NavBar from '../NavBar';
import WeeklyPlanner from './WeeklyPlanner';
import styles from './MealSelection.module.scss';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase.js'

const MealSelection = (props) => {

  let mon;
  let tues;
  let wed;
  // let thurs;
  // let fri;
  // let sat;
  // let sun;

  let weekArr;
  let dayArr;


  const [weeksMeals, setWeeksMeals] = useState([]);

  const getWeeklyMeals = () => {
    firestore.collection('weeksMeals').doc('210322').get()
    .then(response => {
      let weekObj= response.data();
      mon = weekObj.day1MealOptions
      tues = weekObj.day2MealOptions
      wed = weekObj.day3MealOptions
      setWeeksMeals([mon, tues, wed]);
    })
    console.log(weeksMeals)
  }

  useEffect(() => {
    getWeeklyMeals()
  }, [])

  return (
    <div className="content">
      <NavBar />
      <div className={`${styles.page} mainSection`}>
        { weeksMeals.length > 0 ? <WeeklyPlanner mealData = {weeksMeals} /> : null}
          <button className={"button-style-1 " + styles.btnReview}>
            <Link to="mealconfirmation">
              Review
            </Link>
          </button>
      
      </div>
    </div>
  );
}

// READ: No button styling or positions are added yet, only the linking of it

export default MealSelection;

