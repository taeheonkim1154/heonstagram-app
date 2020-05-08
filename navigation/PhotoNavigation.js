import 'react-native-gesture-handler';
import * as React from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tab = createMaterialTopTabNavigator();

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Select" component={SelectPhoto} />
            <Tab.Screen name="Take" component={TakePhoto} />
        </Tab.Navigator>
    );
};