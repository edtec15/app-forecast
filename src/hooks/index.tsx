import React, { ReactNode } from 'react';

import { LocationProvider } from './Location';
import { HandlerForecastProvider } from './HandlerForecast';

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
    <LocationProvider>
        <HandlerForecastProvider>{children}</HandlerForecastProvider>
    </LocationProvider>
);

export default AppProvider;
