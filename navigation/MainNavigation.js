import 'react-native-gesture-handler';
import * as React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";
import PhotoNavigation from './PhotoNavigation';
import TabNavigation from "./TabNavigation";
import MessageNavigation from './MessageNavigation';
import { NavigationContainer } from '@react-navigation/native';

const MainNavigation = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <MainNavigation.Navigator>
                <PhotoNavigation />
                <TabNavigation />
                <MessageNavigation />
            </MainNavigation.Navigator>
        </NavigationContainer>
    );
};