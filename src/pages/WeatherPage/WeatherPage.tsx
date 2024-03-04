import { Header } from '../../components/Header/Header';
import { Box, styled } from '@mui/material';
import { CitiesList } from '../../components/WeatherPageComponents/CitiesList/CitiesList';
import { useAuthHook } from '../../hooks/useAuthHook';
import { Navigate } from 'react-router-dom';

export const WeatherPage = () => {
  const { isAuth } = useAuthHook();

  return isAuth ? (
    <PageContainer>
      <Header />
      <CitiesList />
    </PageContainer>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

const PageContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  padding: '30px 100px',
}));
