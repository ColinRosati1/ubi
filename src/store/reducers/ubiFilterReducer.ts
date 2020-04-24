import { Action, ActionType } from 'store/actions';
import { initialState } from 'store/types';

export const ubiFilterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ubiFilter:
      return action.payload;
    default:
      return state;
  }
};
