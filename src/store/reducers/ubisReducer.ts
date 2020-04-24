import { Action, ActionType } from 'store/actions';
import { initialState } from 'store/types';

export const ubiReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.fetchRequest:
      return action.payload;
    case ActionType.fetchUbis:
      return action.payload;
    case ActionType.fetchUbiFailed:
      return action.payload;
    default:
      return state;
  }
};
