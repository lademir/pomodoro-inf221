import React from 'react';
import { useCountdown } from '../hooks/useCountdown';


interface timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: number;
  start: boolean;
  pomodoroStopedTime: number;
}


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Fim!!!</span>
    </div>
  );
};

const ShowCounter = ({ minutes, seconds }: timer) => {
  return (
    <div className="show-counter">
      {minutes}
      :
      {seconds}
    </div>
  );
};

const CountdownTimer = ({ start, targetDate, pomodoroStopedTime }: CountdownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else if (start == false) {
    return <div className="show-counter">
      {pomodoroStopedTime}:00
    </div>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
