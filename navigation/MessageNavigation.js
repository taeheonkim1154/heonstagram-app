import 'react-native-gesture-handler';
import * as React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";

const MessageNavigation = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <MessageNavigation.Navigator>
                <MessageNavigation.Screen name='Messages' component={Messages} />
                <MessageNavigation.Screen name='Message' component={Message} />
            </MessageNavigation.Navigator>
        </NavigationContainer>
    )
}