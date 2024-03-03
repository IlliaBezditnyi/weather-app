import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Box } from '@mui/material';
import { CitiesList } from '../../components/CitiesList/CitiesList';

export const WeatherPage: FC = () => {
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
