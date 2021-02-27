import Realm from 'realm';

import { ForecastSchema } from '../database/schemas/forecasts';
import { HistorySchema } from '../database/schemas/history';

export default function getRealm() {
    return Realm.open({
        schema: [ForecastSchema, HistorySchema],
    });
}
