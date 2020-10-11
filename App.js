import React from 'react';
import { Button, StyleSheet } from 'react-native';

import colors from './app/config/colors';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

import Test from './app/test/Test';
import AppText from './app/components/AppText';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Tweets = ({ navigation }) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Button
      title='View Tweet bruh'
      onPress={() => navigation.navigate('TweetDetails')}
    />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <AppText>TweetDetails</AppText>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black, // temporary battery drain solution
  },
});
