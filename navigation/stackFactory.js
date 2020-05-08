import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';

const stackFactory = createStackNavigator();

export default ({route, navigation}) => {
    const { InitialRoute, customConfig} = route.params;
    return (
        <stackFactory.Navigator initialRouteName="Home">
            <stackFactory.Screen name={route.name} component={InitialRoute} options={customConfig} />
        </stackFactory.Navigator>
    );
};