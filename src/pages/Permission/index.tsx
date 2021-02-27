import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button';
import { useLocation } from '../../hooks/Location';

import Logo from '../../assets/logo.png';
import { Container, Img, Title, Text, Question } from './styles';

const Permission = () => {
    const navigation = useNavigation();

    const { permission } = useLocation();

    /** */
    const handleToPermission = useCallback(async () => {
        await permission();
        navigation.navigate('home');
    }, []);
    return (
        <Container>
            <Img source={Logo} />
            <Title>Permissão</Title>
            <Text>
                O Aplicativo Forecast, precisa de sua permissão para acessar sua
                localização, iremos usar a mesma para pesquisar a previsão do
                tempo com base em sua localização atual, para melhorar sua
                experiência com o nosso aplicativo.
            </Text>
            <Question>
                Deseja Permitir que o aplicativo acesse sua Localização ?
            </Question>
            <Button color="#004584" onPress={handleToPermission}>
                Permitir
            </Button>
            <Button color="#FF0000" onPress={() => navigation.navigate('home')}>
                Negar
            </Button>
        </Container>
    );
};

export default Permission;
