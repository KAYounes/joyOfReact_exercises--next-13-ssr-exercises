'use client';
import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = React.useState('00:00:00.0');

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(format(new Date(), 'hh:mm:ss.S a'));
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">{time}</p>
  );
}

export default Clock;
