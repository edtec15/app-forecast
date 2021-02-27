import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../pages/Splash';
import Home from '../pages/Home';
import Permission from '../pages/Permission';

const Route = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Route.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#379FFF' },
            }}
        >
            <Route.Screen name="splash" component={Splash} />
            <Route.Screen name="permission" component={Permission} />
            <Route.Screen name="home" component={Home} />
        </Route.Navigator>
    </NavigationContainer>
);

export default Routes;
