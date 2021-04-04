import MainContainer from '@app/components/MainContainer';
import { Book } from '@interfaces/book';
import { scale } from '@utils/screenUtils';
import ImageNotFound from '@assets/image-not-found.png';
import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: scale(4),
    height: scale(4)
  }
});

const BookScreen = ({ route }: any) => {
  const { author, title, genre, publisher, year, imageUrl }: Book = route.params;

  return (
    <MainContainer>
      <View style={styles.container}>
        <Image source={imageUrl ? { uri: imageUrl } : ImageNotFound} style={styles.image} />
        <Text>{author}</Text>
        <Text>{title}</Text>
        <Text>{genre}</Text>
        <Text>{publisher}</Text>
        <Text>{year}</Text>
      </View>
    </MainContainer>
  );
};

export default BookScreen;
