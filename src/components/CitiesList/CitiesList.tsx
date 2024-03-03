import { FC } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import {
  getCityWeather,
  removeFromCities,
} from '../../store/slices/locationSlice';
import { useNavigate } from 'react-router-dom';

export const CitiesList: FC = () => {
  const cities = useAppSelector((state) => state.location.cities);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // console.log(`Cities: ${cities.length}`);
  // for (let i = 0; i < cities.length; i++) {
  //   console.log(cities[i]);
  // }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      columnGap={3}
      rowGap={3}
    >
      {cities.map((city: any, index: number) => (
        <WeatherCard
          key={index}
          name={city.name}
          temp={Math.round(city.current?.temp)}
          description={city.current?.weather[0].main}
          humidity={city.current?.humidity}
          feels_like={Math.round(city.current?.feels_like)}
          pressure={city.current?.pressure}
          onRemoveClick={() => dispatch(removeFromCities(city.name))}
          onRefreshClick={() => dispatch(getCityWeather([city.lat, city.lon]))}
          onSeeMoreClick={() => navigate('/details', { state: { id: index } })}
        />
      ))}
    </Grid>
  );
};
