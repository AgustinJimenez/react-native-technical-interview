import BookService from '@services/BookService';
import { ReduxAction } from '@interfaces/redux';
import { ServiceResponseInterface } from '@interfaces/ServiceResponseInterface';
import { Book } from '@interfaces/book';

export const actions = {
  LOAD_BOOKS: 'LOAD_BOOKS'
} as const;

export const actionCreators = {
  getBooks: async () => {
    let books: Array<Book> = [];
    const response: ServiceResponseInterface = await BookService.getBooks();
    if (response.ok) books = response.data;

    const action: ReduxAction = {
      type: actions.LOAD_BOOKS,
      payload: { books }
    };

    return action;
  }
};

export default actionCreators;
