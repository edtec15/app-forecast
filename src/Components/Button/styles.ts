import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)<ButtonStyleProps>`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background: ${props => (props.color ? props.color : '#004584')};

    margin: 5px;

    justify-content: center;
    align-items: center;
`;
export const Text = styled.Text`
    font-family: 'Roboto-Medium';
    color: #fff;
    font-size: 16px;
`;
