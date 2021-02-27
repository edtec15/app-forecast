import React, {
    createContext,
    useContext,
    useEffect,
    useCallback,
    ReactNode,
    useState,
} from 'react';

import RNLocation from 'react-native-location';

interface LocationContextData {
    permission(): Promise<boolean>;
    checkPermission(): Promise<boolean>;
    location(): void;
    getLocation: GeolocationProps;
}

interface GeolocationProps {
    lat?: number;
    lon?: number;
}

interface LocationProviderProps {
    children: ReactNode;
}

const LocationContext = createContext<LocationContextData>(
    {} as LocationContextData,
);

const LocationProvider = ({ children }: LocationProviderProps) => {
    const [data, setData] = useState<GeolocationProps>();

    const permission = useCallback(async () => {
        const response = await RNLocation.requestPermission({
            ios: 'whenInUse',
            android: {
                detail: 'coarse',
            },
        });

        return response;
    }, []);

    const checkPermission = async () => {
        const response = await RNLocation.checkPermission({
            ios: 'whenInUse',
            android: { detail: 'coarse' },
        });
        return response;
    };

    const location = useCallback(async () => {
        await settings();
        if (!(await checkPermission())) {
            await permission();
            return;
        }

        const response = await RNLocation.getLatestLocation({ timeout: 20000 });

        setData({
            lat: response?.latitude,
            lon: response?.longitude,
        });
    }, []);

    const settings = async () => {
        await RNLocation.configure({
            distanceFilter: 100, // Meters
            desiredAccuracy: {
                ios: 'best',
                android: 'balancedPowerAccuracy',
            },
            // Android only
            androidProvider: 'auto',
            interval: 5000, // Milliseconds
            fastestInterval: 10000, // Milliseconds
            maxWaitTime: 5000, // Milliseconds
            // iOS Only
            activityType: 'other',
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, // Degrees
            headingOrientation: 'portrait',
            pausesLocationUpdatesAutomatically: false,
            showsBackgroundLocationIndicator: false,
        });
    };

    return (
        <LocationContext.Provider
            value={{
                permission,
                checkPermission,
                location,
                getLocation: { ...data },
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

function useLocation() {
    const context = useContext(LocationContext);

    if (!context) {
        throw new Error('useLocation mus be used withian an LocationProvider');
    }

    return context;
}

export { LocationProvider, useLocation };
