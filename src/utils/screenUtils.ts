import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const scale = (number = 1) => (number / 10) * deviceWidth;
