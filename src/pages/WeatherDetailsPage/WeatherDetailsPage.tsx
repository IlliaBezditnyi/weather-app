import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Box } from '@mui/material';
import { MainInfo } from '../../components/WearherDetailsComponents/MainInfo/MainInfo';
import { HourlyForecast } from '../../components/WearherDetailsComponents/HourlyForecast/HourlyForecast';
import { Header } from '../../components/Header/Header';

export const WeatherDetailsPage = () => {
  const { state } = useLocation();
  const cities = useAppSelector((state) => state.location.cities);

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Header disabledSearch={true} />
      <MainInfo
        city={cities[state.id]?.name}
        temp={cities[state.id]?.current.temp}
        description={cities[state.id]?.current.weather[0].main}
        date={cities[state.id]?.timezone_offset}
      />
      <HourlyForecast
        hourlyForecast={cities[state.id]?.hourly}
        timezone={cities[state.id].timezone}
      />
    </Box>
  );
};
