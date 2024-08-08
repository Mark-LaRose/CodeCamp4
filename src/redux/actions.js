export const INCREMENT_BREAK = 'INCREMENT_BREAK';
export const DECREMENT_BREAK = 'DECREMENT_BREAK';
export const INCREMENT_SESSION = 'INCREMENT_SESSION';
export const DECREMENT_SESSION = 'DECREMENT_SESSION';
export const START_STOP = 'START_STOP';
export const RESET = 'RESET';
export const DECREMENT_TIME = 'DECREMENT_TIME';
export const SWITCH_PHASE = 'SWITCH_PHASE';

export const incrementBreak = () => ({
  type: INCREMENT_BREAK,
});

export const decrementBreak = () => ({
  type: DECREMENT_BREAK,
});

export const incrementSession = () => ({
  type: INCREMENT_SESSION,
});

export const decrementSession = () => ({
  type: DECREMENT_SESSION,
});

export const startStop = () => ({
  type: START_STOP,
});

export const reset = () => ({
  type: RESET,
});

export const decrementTime = () => ({
  type: DECREMENT_TIME,
});

export const switchPhase = () => ({
  type: SWITCH_PHASE,
});