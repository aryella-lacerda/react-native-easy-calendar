import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Switch from './Switch';
import DateSelectionExamples from './DateSelectionExamples';
import MultiDateSelectionExamples from './MultiDateSelectionExamples';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Switch" component={Switch} options={{ headerShown: false }} />
        <Stack.Screen
          name="DateSelectionExamples"
          component={DateSelectionExamples}
          options={{ title: 'Date Selection Examples', headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="MultiDateSelectionExamples"
          component={MultiDateSelectionExamples}
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
