import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { WeatherDetailsPage } from './pages/WeatherDetailsPage/WeatherDetailsPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/details" element={<WeatherDetailsPage />} />
    </Routes>
  );
};
