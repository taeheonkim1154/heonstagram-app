import React from "react";
import styled from "styled-components";
import {TouchableOpacity} from "react-native-gesture-handler";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => (
    <View>
        <Text>Auth Home</Text>
        {/* 클릭하면 Login이라는 이름의 라우터로 렌더링 됨 */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Go to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text>Go to Sign up</Text>
        </TouchableOpacity>
    </View>
);