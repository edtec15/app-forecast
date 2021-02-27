import React, { ReactNode } from 'react';
import { useHandlerForecast } from '../../hooks/HandlerForecast';

import { Container, Select, CustomIcon, Description } from './styles';

interface CityProps {
    children: ReactNode;
}

const City = ({ children }: CityProps) => {
    const { selected } = useHandlerForecast();
    return (
        <Container>
            <Select>
                <CustomIcon name="place" />
                <Description>{selected.city}</Description>
            </Select>
        </Container>
    );
};

export default City;
