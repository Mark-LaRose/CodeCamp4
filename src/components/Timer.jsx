import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startStop, reset, decrementTime } from '../redux/actions';
import '../styles/timer.scss';

const Timer = () => {
  const dispatch = useDispatch();
  const { isRunning, phase } = useSelector(state => state);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  return (
    <div className="timer">
      <button id="start_stop" onClick={() => dispatch(startStop())}>{isRunning ? 'Stop' : 'Start'}</button>
      <button id="reset" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Timer;