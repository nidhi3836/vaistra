import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import Home from './Home';

const Tab = createBottomTabNavigator();

function DrawerFile() {
  return (
    <View>
      <Text>this is Drawer File</Text>
    </View>
  );
}
export default DrawerFile