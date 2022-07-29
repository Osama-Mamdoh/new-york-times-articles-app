import { SearchAction, SearchActionType } from '../actions/keywords.action';

const initialState: Array<string> = [];

export function SearchReducer(
  state: Array<string> = initialState,
  action: SearchAction
) {
  switch (action.type) {
    case SearchActionType.ADD_KEYWORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
