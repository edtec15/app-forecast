import React, { useEffect, useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useLocation } from '../../hooks/Location';
import { useHandlerForecast } from '../../hooks/HandlerForecast';

import City from '../../Components/City';
import ListBoxTemperature from '../../Components/ListBoxTemperature';

import Condition from '../../assets/forecasts/condition.json';
import {
    BlockDay,
    Container,
    ContainerInfo,
    Img,
    BoxInfoForecastDay,
    BoxInfoForecastWeek,
    CustomIcon,
    Temperature,
    WeekDate,
} from './styles';

import clock from '../../assets/forecasts/clock.png';
import moinho from '../../assets/forecasts/moinho.png';
import night from '../../assets/forecasts/night.png';
import day from '../../assets/forecasts/day.png';

const Home = () => {
    /** */
    const { getLocation } = useLocation();
    const { forecast, selected } = useHandlerForecast();
    const [_forecast, setForecast] = useState<ForecastDataProps>(
        {} as ForecastDataProps,
    );

    useEffect(() => {
        getForecast();
    }, []);

    async function getForecast() {
        if (getLocation) {
            const res = await forecast({
                lat: getLocation?.lat,
                lon: getLocation?.lon,
            });
            setForecast({ ...res });
        }
    }

    return (
        <Container>
            <City>{_forecast?.city}</City>
            <ContainerInfo>
                <Img
                    height={100}
                    width={100}
                    source={{
                        uri: Condition.find(
                            (i: { title: string; img: string }) =>
                                i.title == selected?.forecast?.condition ||
                                'none_day',
                        ).img,
                    }}
                />
                <WeekDate style={{ marginTop: 20 }}>
                    {selected?.forecast?.date}
                </WeekDate>

                <BoxInfoForecastDay>
                    <BlockDay radiusTopLeft={20} radiusBottomLeft={20}>
                        <CustomIcon name="arrow-upward" />
                        <Temperature color="#fff" size={25}>
                            {selected.forecast?.max}º
                        </Temperature>
                    </BlockDay>
                    <BlockDay>
                        <CustomIcon name="arrow-downward" />
                        <Temperature color="#fff" size={25}>
                            {selected.forecast?.min}º
                        </Temperature>
                    </BlockDay>
                    <BlockDay radiusTopRight={20} radiusBottomRight={20}>
                        <Temperature color="#fff" size={25}>
                            {selected.forecast?.weekday?.toUpperCase()}
                        </Temperature>
                    </BlockDay>
                </BoxInfoForecastDay>

                <BoxInfoForecastWeek>
                    <BlockDay
                        flexDirection="column"
                        radiusTopLeft={20}
                        radiusBottomLeft={20}
                    >
                        <Img
                            height={30}
                            width={30}
                            source={
                                selected?.currently == 'noite' ? night : day
                            }
                        />
                        <Temperature color="#fff" size={16}>
                            {selected?.currently?.toUpperCase()}
                        </Temperature>
                    </BlockDay>
                    <BlockDay flexDirection="column">
                        <Img height={30} width={30} source={clock} />
                        <Temperature color="#fff" size={16}>
                            {selected?.time}
                        </Temperature>
                    </BlockDay>
                    <BlockDay
                        flexDirection="column"
                        radiusTopRight={20}
                        radiusBottomRight={20}
                    >
                        <Img height={30} width={30} source={moinho} />
                        <Temperature color="#fff" size={16}>
                            {selected?.wind_speedy}
                        </Temperature>
                    </BlockDay>
                </BoxInfoForecastWeek>
                <ListBoxTemperature />
            </ContainerInfo>
        </Container>
    );
};

export default Home;
