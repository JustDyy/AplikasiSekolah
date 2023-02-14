import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LoginScreen, RegisScreen} from '../screens';
import {ROUTES} from '../constant';

const Stack = createStackNavigator();

function AuthNavigator() {
    console.log(Stack);
    return(
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;