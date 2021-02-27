import React from 'react';
import { ButtonCustomProps } from '../@Types/ButtonProps';

import { Container, Text } from './styles';

const Button = ({ children, color, ...rest }: ButtonCustomProps) => (
    <Container {...rest} color={color}>
        <Text>{children}</Text>
    </Container>
);

export default Button;
