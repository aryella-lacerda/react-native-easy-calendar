import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import SingleDateSelection from './Calendars/SingleDateSelection';
import MultiDateSelection from './Calendars/MultiDateSelection';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen
          name="DateSelectionExamples"
          component={SingleDateSelection}
          options={{ title: 'Date Selection Examples', headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="MultiDateSelectionExamples"
          component={MultiDateSelection}
          options={{
            title: 'Multi Date Selection Examples',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
