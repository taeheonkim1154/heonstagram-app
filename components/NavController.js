import React from "react";
import { View } from "@react-navigation/native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import MainNavigation from "../navigation/MainNavigation";

function NavController() {
    const isLoggedIn = useIsLoggedIn();
    return (
        <View>
            {isLoggedIn ? (
                <MainNavigation />
            ) : (
                <AuthNavigation />
            )}
        </View>
    );
}

export default NavController;