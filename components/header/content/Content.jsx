import React from 'react';
import style from '../content/Content.module.css';

function Content(props) {
  return (
    <div className={style.bigContent}>
      <div className={style.titleContent}>
        <div>
          <h1>
            Make your interior more
            Minimalistic & modern
          </h1>
        </div>
        <div>
          <p className={style.textContent}>
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;