import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`;

export const Select = styled.View`
    height: 35px;
    margin-top: 10px;
    padding: 10px 20px;

    background: #fff4;
    border-radius: 50px;

    flex-direction: row;
    align-items: center;
`;

export const CustomIcon = styled(Icon)`
    color: #ffffff;
    font-size: 20px;
`;

export const Description = styled.Text`
    margin-left: 15px;
    color: #ffffff;
    font-size: 16px;
`;
