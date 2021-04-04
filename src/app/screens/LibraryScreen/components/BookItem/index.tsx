import React from 'react';
import { Text, View, Image, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import ImageNotFound from '@assets/image-not-found.png';
import { Book } from '@interfaces/book';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

import styles from './styles';

const BookItem = ({ item }: ListRenderItemInfo<Book>) => {
  const navigation = useNavigation();
  const { author, imageUrl, title } = item;

  const goToBookScreen = React.useCallback(() => {
    navigation.navigate(Routes.BOOK, item);
  }, [item, navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={goToBookScreen}>
      <View style={styles.imageContainer}>
        <Image
          source={imageUrl ? { uri: imageUrl } : ImageNotFound}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainers}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
