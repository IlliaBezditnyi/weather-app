import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Box } from '@mui/material';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';

export const WeatherPage: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
      <Header />
      <WeatherCard />
    </Box>
  );
};
