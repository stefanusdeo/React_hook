import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

// component
import AvailableMeal from './AvailableMeal';
import MealSummary from './MealSummary';

export default function Meal() {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
}
