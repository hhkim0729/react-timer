import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <input type="number" value={hour} onChange={onHourChange}></input>
      <input type="number" value={min} onChange={onMinChange}></input>
      <input type="number" value={sec} onChange={onSecChange}></input>
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
        입력
      </Link>
    </div>
  );
};

export default Input;
