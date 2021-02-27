import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useCallback,
} from 'react';
import ForecastRepository from '../database/repositories/forecastRepository';
import HistoryRepository from '../database/repositories/historyRepository';

import api from '../service/api';

interface ForecascParams {
    lat?: number;
    lon?: number;
}

interface HandlerForecastData {
    forecast({ lat, lon }: ForecascParams): Promise<ForecastDataProps>;
    selectedForecast({}: ItemProps): void;
    selected: SelectedProps;
}

interface HandlerForecastProviderProps {
    children: ReactNode;
}

interface SelectedProps {
    city: string;
    time: string;
    currently: string;
    wind_speedy: string;
    forecast: ItemProps;
}

const HandlerForecastContext = createContext<HandlerForecastData>(
    {} as HandlerForecastData,
);

const HandlerForecastProvider = ({
    children,
}: HandlerForecastProviderProps) => {
    const [selected, setSelected] = useState<SelectedProps>(
        {} as SelectedProps,
    );

    const forecast = useCallback(
        async ({ lat, lon }: ForecascParams) => {
            try {
                const response = await api.get(
                    `/weather?key=ee2a916a&lat=${lat}&lon=${lon}&user_ip=remote`,
                );

                setSelected({
                    ...response.data?.results,
                    forecast: response.data?.results?.forecast[0],
                });

                new HistoryRepository().save({ ...response.data?.results });
                new ForecastRepository().save({
                    data: response?.data?.results?.forecast,
                });

                return { ...response.data?.results };
            } catch (error) {
                /** */
                const findHistory = await new HistoryRepository().find();
                const findForecast = await new ForecastRepository().find();

                if (findHistory.length > 0 || findHistory.length > 0) {
                    setSelected({
                        ...findHistory[0].toJSON(),
                        forecast: findForecast.toJSON()[0],
                    });

                    return { forecast: findForecast.toJSON() };
                }
            }
        },
        [selected],
    );

    const selectedForecast = useCallback(
        (item: ItemProps) => {
            setSelected({ ...selected, forecast: { ...item } });
        },
        [selected],
    );
    return (
        <HandlerForecastContext.Provider
            value={{ forecast, selectedForecast, selected }}
        >
            {children}
        </HandlerForecastContext.Provider>
    );
};

function useHandlerForecast() {
    const context = useContext(HandlerForecastContext);

    if (!context) {
        throw new Error(
            'useHandlerForecast mus be used whithian an HandlerForecastProvider',
        );
    }

    return context;
}

export { HandlerForecastProvider, useHandlerForecast };
