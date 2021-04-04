import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import LibraryScreen from '@app/screens/LibraryScreen';
import BookScreen from '@app/screens/BookScreen';

const StackNavigator = createStackNavigator();

const AppNavigator = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen name={Routes.LIBRARY} component={LibraryScreen} options={{ title: 'Library' }} />
    <StackNavigator.Screen name={Routes.BOOK} component={BookScreen} options={{ title: 'Book' }} />
  </StackNavigator.Navigator>
);

export default AppNavigator;
