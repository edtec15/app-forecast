import { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
interface ButtonCustomProps extends RectButtonProps {
    children: ReactNode;
    color?: string;
}
