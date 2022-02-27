import React from 'react';

// css
import classes from './MealSummary.module.css';

export default function MealSummary() {
  return (
    <section className={classes.summary}>
      <h2>Enak Untuk Kamu</h2>
      <p>Pilih makanan enak mu untuk keluarga dan kamu sendiri</p>
      <p>Semua makanan enak dan sehat untuk kamu dan keluarga mu!</p>
    </section>
  );
}
