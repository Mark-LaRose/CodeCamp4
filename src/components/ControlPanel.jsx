import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  reset,
  startStop,
} from '../redux/actions';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { breakLength, sessionLength, isRunning } = useSelector((state) => state);

  return (
    <div className="control-panel">
      <div className="length-control">
        <div id="break-label">Break Length</div>
        <button id="break-decrement" onClick={() => !isRunning && dispatch(decrementBreak())}>
          -
        </button>
        <div id="break-length">{breakLength / 60}</div>
        <button id="break-increment" onClick={() => !isRunning && dispatch(incrementBreak())}>
          +
        </button>
      </div>
      <div className="length-control">
        <div id="session-label">Session Length</div>
        <button id="session-decrement" onClick={() => !isRunning && dispatch(decrementSession())}>
          -
        </button>
        <div id="session-length">{sessionLength / 60}</div>
        <button id="session-increment" onClick={() => !isRunning && dispatch(incrementSession())}>
          +
        </button>
      </div>
      <button id="start_stop" onClick={() => dispatch(startStop())}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button id="reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default ControlPanel;