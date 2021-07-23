import React, { useState, useEffect, useRef } from 'react';

const padNumber = (num, length) => {
  return String(num).padStart(length, '0');
};

const Timer = (props) => {
  const tempHour = props.hour ? parseInt(props.hour) : 0;
  const tempMin = props.min ? parseInt(props.min) : 0;
  const tempSec = props.sec ? parseInt(props.sec) : 0;
  const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
  const interval = useRef(null);

  const [hour, setHour] = useState(padNumber(tempHour, 2));
  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60, 2));
      setMin(padNumber(parseInt(initialTime.current / 60), 2));
      setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  return (
    <div>
      {hour} : {min} : {sec}
    </div>
  );
};

export default Timer;
