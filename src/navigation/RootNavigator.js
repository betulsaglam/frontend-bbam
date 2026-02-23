import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import OnboardingScreen from '../screens/OnboardingScreen';
import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={OnboardingScreen} options={{ gestureEnabled: false }} />
      <Stack.Screen name="MainTabs" component={TabNavigator} options={{ gestureEnabled: false }} />
      <Stack.Screen 
        name="WorkoutDetails" 
        component={WorkoutDetailsScreen} 
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
