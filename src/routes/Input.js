import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Input.css';

const Input = () => {
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onHourChange = (event) => {
    setHour(event.target.value);
  };

  const onMinChange = (event) => {
    setMin(event.target.value);
  };

  const onSecChange = (event) => {
    setSec(event.target.value);
  };

  return (
    <div className="input-box">
      <h1>I'm late!</h1>
      <img
        src="https://media.giphy.com/media/Il1VHqlzomIM0/source.gif"
        alt="late rabbit"
        crossOrigin="anonymous"
      />

      <h3>How much time do I have left?</h3>
      <input
        type="number"
        placeholder="0"
        value={hour}
        onChange={onHourChange}
      ></input>
      <span>h</span>
      <input
        type="number"
        placeholder="0"
        value={min}
        onChange={onMinChange}
      ></input>
      <span>m</span>
      <input
        type="number"
        placeholder="0"
        value={sec}
        onChange={onSecChange}
      ></input>
      <span>s</span>
      <div className="link">
        <Link
          to={{
            pathname: '/time',
            state: {
              hour: hour,
              min: min,
              sec: sec,
            },
          }}
        >
          Hurry up!
        </Link>
      </div>
    </div>
  );
};

export default Input;
