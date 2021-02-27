import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import ItemBox from '../ItemBox';

import { Container } from './styles';

import { useHandlerForecast } from '../../hooks/HandlerForecast';
import { useLocation } from '../../hooks/Location';

const ListBoxTemperature = () => {
    const { forecast } = useHandlerForecast();
    const { getLocation } = useLocation();

    const [forecasts, setForecasts] = useState<ItemProps[]>();

    useEffect(() => {
        forecastHandler();
    }, []);

    const forecastHandler = useCallback(async () => {
        if (getLocation) {
            const response = await forecast({
                lat: getLocation.lat,
                lon: getLocation.lon,
            });

            setForecasts(response?.forecast);
        }
    }, [getLocation]);
    return forecasts?.length == 0 ? (
        <ActivityIndicator
            style={{ marginTop: 30 }}
            size="large"
            color="#fff"
        />
    ) : (
        <Container
            data={forecasts}
            renderItem={({ item }) => <ItemBox {...item} />}
            keyExtractor={(item: ItemProps) => item.date}
            horizontal={true}
        />
    );
};

export default ListBoxTemperature;
