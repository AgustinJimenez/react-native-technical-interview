import { scale } from '@utils/screenUtils';
import { StyleSheet } from 'react-native';
import { colors, styles } from 'src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white(),
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(0.25),
    borderRadius: scale(0.25),
    paddingVertical: scale(0.4),
    paddingRight: '5%',
    shadowColor: colors.black(),
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    }
  },
  imageContainer: {
    flex: 0.3,
    height: scale(2.5),
    shadowColor: colors.black(),
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    }
    // backgroundColor: colors.red()
  },
  image: {
    height: '100%',
    width: scale(2),
    alignSelf: 'center'
  },
  textContainers: {
    flex: 0.6,
    height: '100%'
  },
  title: {
    ...styles.fontTitleOne
  },
  author: {
    ...styles.fontSubtitleOne
  }
});
