import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { useLocation } from '../../hooks/Location';

import { Container } from './styles';

const Splash = () => {
    const { checkPermission } = useLocation();
    const navigation = useNavigation();

    useEffect(() => {
        Permission();
    }, []);

    const Permission = async () => {
        const check = await checkPermission();
        setTimeout(() => {
            if (check) {
                navigation.navigate('home');
                return;
            }
            navigation.navigate('permission');
        }, 3000);
    };

    return (
        <Container>
            <Lottie
                source={require('../../assets/cloud-animation.json')}
                loop
                autoPlay
            />
        </Container>
    );
};

export default Splash;
