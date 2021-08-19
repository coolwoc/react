import { IState } from '../interfaces/IState';
import ActionTypes from './ActionTypes';

const initialState: IState = {
  count: 0,
};

const Reducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionTypes.RESET:
      return {
        ...state,
        count: 0,
      };
  }
  return state;
};

export default Reducer;
