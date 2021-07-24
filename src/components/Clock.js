import React, { useState, useRef, useEffect } from 'react';
import './Clock.css';

const padNumber = (num, length) => {
  return String(num).padStart(length, '0');
};

const Clock = () => {
  const date = new Date();
  const [hour, setHour] = useState(padNumber(date.getHours(), 2));
  const [min, setMin] = useState(padNumber(date.getMinutes(), 2));
  const [sec, setSec] = useState(padNumber(date.getSeconds(), 2));
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const now = new Date();
      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
      setSec(padNumber(now.getSeconds(), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="clock">
      <h1>Now</h1>
      <h3>
        {hour} : {min} : {sec}
      </h3>
    </div>
  );
};

export default Clock;
