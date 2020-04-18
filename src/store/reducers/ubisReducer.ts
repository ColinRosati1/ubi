import { Ubi, Action, ActionType } from 'store/actions';

export const ubiReducer = (state: Ubi[] = [], action: Action) => {
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
