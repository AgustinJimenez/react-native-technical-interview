/* eslint-disable line-comment-position */
import { scale } from '@utils/screenUtils';
import { StyleSheet } from 'react-native';

export const colors = {
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // rgb(255,255,255)
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // rgb(0,0,0)
  gray: (opacity = 1) => `rgba(128,128,128, ${opacity})`, // rgb(128,128,128)
  green: (opacity = 1) => `rgba(0,128,0, ${opacity})`, // rgb(0,128,0)
  blue: (opacity = 1) => `rgba(0,0,255, ${opacity})`, // rgb(0,0,255)
  red: (opacity = 1) => `rgba(255,0,0, ${opacity})` // rgb(255,0,0)
};

export const styles = StyleSheet.create({
  fontRegular: {
    fontWeight: '500',
    fontSize: scale(0.4)
  },
  fontTitleOne: {
    fontWeight: '500',
    fontSize: scale(0.5)
  },
  fontSubtitleOne: {
    fontWeight: '500',
    color: colors.gray(),
    fontSize: scale(0.4),
    marginTop: scale(0.1)
  }
});
