import { BOOKS_MOCK } from '@constants/mockBooks';
import wait from '@utils/wait';

export default {
  getBooks: async () => {
    await wait(3000);
    return { ok: true, data: BOOKS_MOCK };
  }
};
