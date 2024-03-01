import { FC, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Box } from '@mui/material';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import { CitiesList } from '../../components/CitiesList/CitiesList';
// import { useAppDispatch } from '../../hooks/reduxHooks';
// import { getCityLocation } from '../../store/slices/locationSlice';

export const WeatherPage: FC = () => {
  // const dispatch = useAppDispatch();

  // getting products based on given query params
  // useEffect(() => {
  //   dispatch(getCityLocation('Kyiv'));
  //   console.log(dispatch(getCityLocation('Kyiv')));
  // }, [dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '100px',
      }}
    >
      <Header />
      <CitiesList />
    </Box>
  );
};
