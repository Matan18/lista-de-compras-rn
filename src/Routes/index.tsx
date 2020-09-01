import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import connect from "../database/connection";

import List from '../pages/List';
import Buying from '../pages/Buying';
import { RootStackParams } from './routetypes';

// import { Container } from './styles';
const AppStack = createStackNavigator<RootStackParams>();

const Routes: React.FC = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="List"
          component={List}
          options={{
            headerShown: true,
          }}
        />
        <AppStack.Screen name="Buying" component={Buying} />
      </AppStack.Navigator>
    </NavigationContainer >
  );
};

export default Routes;
