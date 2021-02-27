import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(FlatList as new () => FlatList<ItemProps>)`
    flex: 1;
    margin: 30px 10px 0px 0px;
    padding: 10px;
`;
