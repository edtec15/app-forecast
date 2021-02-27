import 'react-native-gesture-handler';

import React from 'react';

import { View, StatusBar } from 'react-native';

import Routes from './routes';

import AppProvider from './hooks';

const App = () => {
    return (
        <>
            <StatusBar hidden={true} />
            <AppProvider>
                <View style={{ backgroundColor: '#379FFF', flex: 1 }}>
                    <Routes />
                </View>
            </AppProvider>
        </>
    );
};

export default App;
