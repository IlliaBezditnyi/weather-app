import { Box, Card, Typography, styled } from '@mui/material';
import { FC } from 'react';

interface HourlyCardProps {
  time: string;
  icon: string;
  temp: number;
}

export const HourlyCard: FC<HourlyCardProps> = ({ time, icon, temp }) => {
  return (
    <HourlyCardContainer>
      <Typography fontSize="24px">{time}</Typography>
      <CardWrapper>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weather icon"
        />
        <Typography fontSize="16px" fontWeight="700">
          {Math.round(temp)}°C
        </Typography>
      </CardWrapper>
    </HourlyCardContainer>
  );
};

const HourlyCardContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
}));

const CardWrapper = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  padding: '20px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(236, 236, 236, 0.1)',
  color: '#fff',
}));
