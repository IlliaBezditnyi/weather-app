import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { WeatherDetailsPage } from './pages/WeatherDetailsPage/WeatherDetailsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/details" element={<WeatherDetailsPage />} />
    </Routes>
  );
};
