import React, { Fragment } from "react";

import "../styles/Checkbox.scss";

export default function Checkbox(props) {
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
      <label className="todo new-item">
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 200 25"
          className="todo__icon"
        >
          <use xlinkHref="#todo__line" className="todo__line" />
          <use xlinkHref="#todo__box" className="todo__box" />
          <use xlinkHref="#todo__check" className="todo__check" />
          <use xlinkHref="#todo__circle" className="todo__circle" />
        </svg>
        <div className="todo__text">{description}</div>
      </label>
    </Fragment>
  );
}
