
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/Home";
import { Sobre } from "../screens/Sobre";
import { Albuns } from "../screens/Albuns";
import { Contatos } from "../screens/Contatos";


const Stack = createMaterialBottomTabNavigator();


export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
            />
            <Stack.Screen
                name="Albuns"
                component={Albuns}
            />
            <Stack.Screen
                name="Contatos"
                component={Contatos}
            />
        </Stack.Navigator>
    )
}