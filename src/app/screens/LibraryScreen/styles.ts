import { scale } from '@utils/screenUtils';
import { StyleSheet } from 'react-native';
import { styles } from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bookList: {
    alignItems: 'center',
    paddingBottom: scale(8)
  },
  notDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale()
  },
  notDataTxt: {
    ...styles.fontRegular
  }
});
