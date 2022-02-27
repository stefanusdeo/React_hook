import React from 'react';

// css
import classes from './Card.module.css';

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
