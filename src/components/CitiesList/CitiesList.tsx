import { FC } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import {
  getCityWeather,
  removeFromCities,
} from '../../store/slices/locationSlice';

export const CitiesList: FC = () => {
  const cities = useAppSelector((state) => state.location.cities);
  const dispatch = useAppDispatch();

  console.log(`Cities: ${cities.length}`);
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      {cities.map((city: any, index: number) => (
        <WeatherCard
          key={index}
          name={city.name}
          temp={city.current?.temp}
          description={city.current?.weather[0].main}
          humidity={city.current?.humidity}
          feels_like={city.current?.feels_like}
          pressure={city.current?.pressure}
          onRemoveCity={() => dispatch(removeFromCities(city.name))}
          onRefreshClick={() => dispatch(getCityWeather([city.lat, city.lon]))}
        />
      ))}
    </Box>
  );
};
