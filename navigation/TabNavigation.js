import 'react-native-gesture-handler';
import * as React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import stackFactory from "./stackFactory";
import { NavigationContainer } from '@react-navigation/native';
import MessagesLink from '../components/MessagesLink';

const TabNavigation = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <TabNavigation.Navigator>
                <TabNavigation.Screen
                    name="Home"
                    component={Home}
                    initialParams={{
                        InitialRoute: Home,
                        customConfig: {
                            title: 'Home',
                            headerStyle: {
                                height: 80
                            },
                            headerRight: () => (
                                <MessagesLink />
                            )
                        }
                    }}
                />
                <TabNavigation.Screen
                    name="Profile"
                    component={Profile}
                    initialParams={{
                        InitialRoute: Profile,
                        customeConfig: {
                            title: 'Profile'
                        }
                    }}
                />
                <TabNavigation.Screen name="Add" component={View} listeners={({navigation}) => ({
                    tabPress : e => {
                        e.preventDefault();
                        navigation.navigate("Photo");
                    },
                })}/>
                <TabNavigation.Screen
                    name="Notifications"
                    component={Notifications}
                    initialParams={{
                        InitialRoute: Notifications,
                        customeConfig: {
                            title: 'Notifications'
                        }
                    }}
                />
                <TabNavigation.Screen
                    name="Search"
                    component={Search}
                    initialParams={{
                        InitialRoute: Search,
                        customeConfig: {
                            title: 'Search'
                        }
                    }}
                />
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}