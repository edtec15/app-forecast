import getRealm from '../../service/realm';

interface historyProps {
    time: string;
    currently: string;
    wind_speedy: string;
    date: string;
    city: string;
}

export default class HistoryRepository {
    async save({ time, currently, wind_speedy, date, city }: historyProps) {
        const realm = await getRealm();
        const findHistory = await this.find();

        try {
            realm.write(() => {
                if (findHistory.length > 0) {
                    realm.delete(findHistory);
                }
                realm.create('history', {
                    uuid: 1,
                    time,
                    currently,
                    wind_speedy,
                    date,
                    city,
                });
            });
        } catch (error) {
            console.info(error);
        }
    }

    async find() {
        const realm = await getRealm();
        return realm.objects('history');
    }
}
