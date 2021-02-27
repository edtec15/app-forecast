import getRealm from '../../service/realm';
import { v4 } from 'react-native-uuid';

interface ForecastProps {
    data: ItemProps[];
}

export default class ForecastRepository {
    async save({ data }: ForecastProps) {
        const realm = await getRealm();
        const findForecast = await this.find();
        realm.write(() => {
            if (findForecast.length > 0) {
                realm.delete(findForecast);
            }
            data.map(item => {
                realm.create('forecasts', {
                    ...item,
                    uuid: v4(),
                });
            });
        });
    }

    async find() {
        const realm = await getRealm();
        return realm.objects('forecasts');
    }
}
