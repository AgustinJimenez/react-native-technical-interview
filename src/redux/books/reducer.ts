// import { BookState } from '@interfaces/book';
import { AppState, ReduxAction } from '@interfaces/redux';

import { actions } from './actions';

const initialState: AppState = {
  books: []
};

const reducer = (state = initialState, action: ReduxAction) => {
  // console.log(`[${action.type}] => `, { state, action });
  switch (action.type) {
    case actions.LOAD_BOOKS:
      return {
        ...state,
        books: action.payload.books
      };

    default:
      return state;
  }
};

export default reducer;
