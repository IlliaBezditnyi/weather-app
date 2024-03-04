import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Box, styled } from '@mui/material';
import { MainInfo } from '../../components/WearherDetailsComponents/MainInfo/MainInfo';
import { HourlyForecast } from '../../components/WearherDetailsComponents/HourlyForecast/HourlyForecast';
import { Header } from '../../components/Header/Header';
import { useAuthHook } from '../../hooks/useAuthHook';

export const WeatherDetailsPage = () => {
  const { state } = useLocation();
  const cities = useAppSelector((state) => state.weather.cities);

  const { isAuth } = useAuthHook();

  return isAuth ? (
    <PageContainer>
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
    </PageContainer>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

const PageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  padding: '30px 100px',
  color: '#fff',
}));
