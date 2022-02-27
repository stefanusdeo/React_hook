import { Fragment } from 'react/cjs/react.production.min';

// img
import imgMeal from '../../assets/img/meals.jpg';

// css
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={imgMeal} alt='table meal' />
      </div>
    </Fragment>
  );
}
