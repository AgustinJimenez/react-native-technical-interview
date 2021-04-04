import { Book } from './book';

export interface AppState {
  books: Book | never[];
}

export interface ReduxAction {
  type: string;
  payload?: any;
}
