import ActionTypes from './ActionTypes';

export const incrementCount = () => {
  return { type: ActionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: ActionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: ActionTypes.RESET };
};
