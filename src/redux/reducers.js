import {
    INCREMENT_BREAK,
    DECREMENT_BREAK,
    INCREMENT_SESSION,
    DECREMENT_SESSION,
    START_STOP,
    RESET,
    DECREMENT_TIME,
    SWITCH_PHASE,
  } from './actions';
  
  const initialState = {
    isRunning: false,
    timeLeft: 1500, // 25 minutes in seconds
    phase: 'Session', // 'Session' or 'Break'
    sessionLength: 1500, // 25 minutes in seconds
    breakLength: 300, // 5 minutes in seconds
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_STOP:
        return { ...state, isRunning: !state.isRunning };
      case RESET:
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        return { ...initialState };
      case DECREMENT_TIME:
        if (state.timeLeft === 0) {
          document.getElementById('beep').play();
          return {
            ...state,
            phase: state.phase === 'Session' ? 'Break' : 'Session',
            timeLeft: state.phase === 'Session' ? state.breakLength : state.sessionLength,
          };
        }
        return { ...state, timeLeft: state.timeLeft - 1 };
      case INCREMENT_BREAK:
        const newBreakLengthInc = Math.min(state.breakLength + 60, 3600);
        return {
          ...state,
          breakLength: newBreakLengthInc,
          timeLeft: !state.isRunning && state.phase === 'Break' ? newBreakLengthInc : state.timeLeft,
        };
      case DECREMENT_BREAK:
        const newBreakLengthDec = Math.max(state.breakLength - 60, 60);
        return {
          ...state,
          breakLength: newBreakLengthDec,
          timeLeft: !state.isRunning && state.phase === 'Break' ? newBreakLengthDec : state.timeLeft,
        };
      case INCREMENT_SESSION:
        const newSessionLengthInc = Math.min(state.sessionLength + 60, 3600);
        return {
          ...state,
          sessionLength: newSessionLengthInc,
          timeLeft: !state.isRunning && state.phase === 'Session' ? newSessionLengthInc : state.timeLeft,
        };
      case DECREMENT_SESSION:
        const newSessionLengthDec = Math.max(state.sessionLength - 60, 60);
        return {
          ...state,
          sessionLength: newSessionLengthDec,
          timeLeft: !state.isRunning && state.phase === 'Session' ? newSessionLengthDec : state.timeLeft,
        };
      default:
        return state;
    }
};
  
export default rootReducer;