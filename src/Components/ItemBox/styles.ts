import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100px;
    height: 120px;
    margin: 5px;
    padding: 5px;

    background: #0085ff;
    border-radius: 10px;

    justify-content: space-around;
    align-items: center;

    elevation: 2;
`;

export const Week = styled.Text`
    color: #fff;
    font-family: 'Roboto-Regular';
`;

export const Img = styled.Image`
    width: 35px;
    height: 35px;
    margin-top: 10px;
`;

export const Footer = styled.View`
    flex-direction: row;
`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    margin: 5px;
`;

export const CustomIcon = styled(Icon)`
    font-size: 10px;
    color: #fff;
`;

export const Info = styled.Text`
    font-size: 13px;
    color: #fff;
    font-family: 'Roboto-Regular';
`;
