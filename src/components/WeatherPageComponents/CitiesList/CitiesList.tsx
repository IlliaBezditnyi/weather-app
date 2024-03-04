import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import {
  getCityWeather,
  removeFromCities,
} from '../../../store/slices/weatherSlice';
import { useNavigate } from 'react-router-dom';

export const CitiesList: FC = () => {
  const cities = useAppSelector((state) => state.weather.cities);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      {cities.length === 0 && (
        <Typography
          fontSize="24px"
          sx={{
            color: '#000',
          }}
        >
          Please, add your city to the list...
        </Typography>
      )}
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
