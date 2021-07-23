import React from 'react';
import Clock from '../components/Clock';
import Timer from '../components/Timer';

const Time = ({ location }) => {
  const hour = parseInt(location.state.hour);
  const min = parseInt(location.state.min);
  const sec = parseInt(location.state.sec);
  return (
    <div>
      <Clock />
      <Timer hour={hour} min={min} sec={sec} />
    </div>
  );
};

export default Time;
