import React from 'react';
import Timer from './Timer';
import NavBar from '../NavBar';
import WeeklyPlanner from './WeeklyPlanner';
import styles from './MealSelection.module.scss';
import { Link } from 'react-router-dom'
const MealSelection = (props) => {

  return (
    <div className="content">
      <NavBar />
      <div className={`${styles.page} mainSection`}>
        <WeeklyPlanner mealData = {props.mealData} getMealChoice = {props.getMealChoice} />
        <Link to="mealconfirmation">
          <button>Review</button>
        </Link>
      </div>
    </div>
  );
}

// READ: No button styling or positions are added yet, only the linking of it

export default MealSelection;

