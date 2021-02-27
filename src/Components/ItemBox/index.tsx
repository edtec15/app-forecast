import React from 'react';

import { useHandlerForecast } from '../../hooks/HandlerForecast';
import {
    Container,
    ContainerInfo,
    Footer,
    Img,
    Info,
    CustomIcon,
    Week,
} from './styles';

import Condition from '../../assets/forecasts/condition.json';

const ItemBox = (item: ItemProps) => {
    const { selectedForecast } = useHandlerForecast();
    return (
        <Container onPress={() => selectedForecast(item)}>
            <Week>{item.weekday.toUpperCase()}</Week>
            <Week style={{ fontSize: 12 }}>{item.date}</Week>
            <Img
                source={{
                    uri: Condition.find(
                        (i: { title: string; img: string }) =>
                            i.title == item.condition,
                    ).img,
                }}
            />
            <Footer>
                <ContainerInfo>
                    <CustomIcon name="arrow-upward" />
                    <Info>{item.max}º</Info>
                </ContainerInfo>
                <ContainerInfo>
                    <CustomIcon name="arrow-downward" />
                    <Info>{item.min}º</Info>
                </ContainerInfo>
            </Footer>
        </Container>
    );
};

export default ItemBox;
