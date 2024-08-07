import React, { Fragment } from "react";
import "../styles/Checkbox.scss";

export default function Checkbox({ onChange, data }) {
  const { id, tarea, descripcion, terminado } = data;

  return (
    <Fragment>
      <label className="todo new-item">
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={terminado}
          onChange={onChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" // Ensure the viewBox is set properly
          className="todo__icon"
        >
          <path d="M21 12.3h168v0.1z" className="todo__line" />
          <path
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
            className="todo__box"
          />
          <path d="M10 13l2 2 5-5" className="todo__check" />
          <circle cx="13.5" cy="12.5" r="10" className="todo__circle" />
        </svg>
        <div className="todo__text">{tarea}: {descripcion}</div>
      </label>
    </Fragment>
  );
}
