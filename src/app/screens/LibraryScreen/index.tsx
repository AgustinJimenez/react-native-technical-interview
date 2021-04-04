/* eslint-disable prettier/prettier */
import MainContainer from '@app/components/MainContainer';
import { Book } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';
import actionCreators from '@redux/books/actions';
import React from 'react';
import { FlatList, RefreshControl, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
// import { Book } from '@interfaces/book';

import { BOOKS_MOCK } from '../../../constants/mockBooks';

import BookItem from './components/BookItem';
import styles from './styles';

const BookListEmpty = () => {

  return (
    <View style={styles.notDataContainer}>
      <Text style={styles.notDataTxt}>No data</Text>
    </View>
  )
}

const LibraryScreen = () => {
  const dispatch = useDispatch();
  const books:Array<Book> = BOOKS_MOCK;
  const [isRefreshing, setRefreshingStatus] = React.useState(false);

  const loadBooks = React.useCallback(async () => {
    const action: ReduxAction = await actionCreators.getBooks();
    dispatch(action);
  }, [dispatch]);

  const reloadList = React.useCallback(async () => {
    if (isRefreshing) return;

    setRefreshingStatus(true);
    await loadBooks();
    setRefreshingStatus(false);
  }, [isRefreshing, loadBooks]);

  React.useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <MainContainer>
      <FlatList
        data={books}
        renderItem={(props) => <BookItem {...props}/>}
        keyExtractor={({ id }) => `${id}`}
        contentContainerStyle={styles.bookList}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={reloadList} />
        }
        ListEmptyComponent={BookListEmpty}
      />
    </MainContainer>
  );
};

export default LibraryScreen;
