import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerInfo = styled.View`
    flex: 1;
    margin-top: 20px;
    align-items: center;
`;
interface ImgProps {
    width: number;
    height: number;
}
export const Img = styled.Image<ImgProps>`
    margin-bottom: 5px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

interface TemperatureProps {
    size: number;
    color: string;
}

export const Temperature = styled.Text<TemperatureProps>`
    font-size: ${props => props.size}px;
    font-family: 'Roboto-Regular';
    color: ${props => props.color};
`;

export const WeekDate = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #ffffff;
`;

export const BoxInfoForecastDay = styled.View`
    width: 80%;
    height: 50px;
    margin-top: 20px;
    border-radius: 20px;

    background: #fff;

    flex-direction: row;
`;

export interface BlockDayProps {
    radiusTopLeft?: number;
    radiusTopRight?: number;
    radiusBottomLeft?: number;
    radiusBottomRight?: number;
    flexDirection?: string;
}
export const BlockDay = styled.View<BlockDayProps>`
    flex: 1;
    margin: 0px 0.7px 0px 0.1px;

    border-top-left-radius: ${props =>
        props.radiusTopLeft ? props.radiusTopLeft : 0}px;
    border-top-right-radius: ${props =>
        props.radiusTopRight ? props.radiusTopRight : 0}px;
    border-bottom-left-radius: ${props =>
        props.radiusBottomLeft ? props.radiusBottomLeft : 0}px;
    border-bottom-right-radius: ${props =>
        props.radiusBottomRight ? props.radiusBottomRight : 0}px;

    background: rgba(55, 159, 255, 0.8);

    flex-direction: ${props =>
        props.flexDirection ? props.flexDirection : 'row'};
    justify-content: center;
    align-items: center;
`;
export const CustomIcon = styled(Icon)`
    margin-right: 10px;
    font-size: 16px;
    font-family: 'Roboto-Bold';
    color: #fff;
`;

export const BoxInfoForecastWeek = styled.View`
    width: 80%;
    height: 80px;
    margin-top: 30px;
    border-radius: 20px;

    background: #fff;

    flex-direction: row;
`;
