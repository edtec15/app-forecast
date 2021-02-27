import { ObjectSchema } from 'realm';

export const ForecastSchema: ObjectSchema = {
    name: 'forecasts',
    properties: {
        uuid: { type: 'string', indexed: true },
        date: 'string',
        weekday: 'string',
        max: 'int',
        min: 'int',
        description: 'string',
        condition: 'string',
    },
};
