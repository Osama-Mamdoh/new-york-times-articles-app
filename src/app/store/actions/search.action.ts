import { Action } from '@ngrx/store';

export enum SearchActionType {
  ADD_KEYWORD = '[Keyword] Add KEYWORD',
}

export class AddKeywodAction implements Action {
  readonly type = SearchActionType.ADD_KEYWORD;
  constructor(public payload: string) {}
}

export type SearchAction = AddKeywodAction;
