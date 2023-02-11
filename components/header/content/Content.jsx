import React from 'react';
import style from '../content/Content.module.css';

function Content(props) {
  return (
    <div>
      <div className={style.bigContent}>
        <h1 className={style.titleContent}>
          Make your interior more
          Minimalistic & modern
        </h1>
        <p className={style.textContent}>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
      </div>
    </div>
  );
};

export default Content;