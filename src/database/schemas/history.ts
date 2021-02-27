import { ObjectSchema } from 'realm';

export const HistorySchema: ObjectSchema = {
    name: 'history',
    properties: {
        uuid: { type: 'int', indexed: true },
        time: 'string',
        currently: 'string',
        wind_speedy: 'string',
        date: 'string',
        city: 'string',
    },
};
