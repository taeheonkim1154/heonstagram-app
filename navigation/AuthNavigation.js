import 'react-native-gesture-handler';
import * as React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import Login from "../screens/Auth/Login";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";
import { NavigationContainer } from '@react-navigation/native';

const AuthNavigation = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <AuthNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
                <AuthNavigation.Screen name="login" component={Login} />
                <AuthNavigation.Screen name="Confirm" component={Confirm} />
                <AuthNavigation.Screen name="Signup" component={Signup} />
                <AuthNavigation.Screen name="AuthHome" component={AuthHome} />
            </AuthNavigation.Navigator>
        </NavigationContainer>
    );
};