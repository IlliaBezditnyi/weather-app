import React, { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { getDate } from '../../../hooks/dateHook';

interface MainInfoProps {
  city: string;
  temp: number;
  description: string;
  date: number;
}

export const MainInfo: FC<MainInfoProps> = ({
  city,
  temp,
  description,
  date,
}) => {
  return (
    <MainInfoContainer>
      <WidgetContainer>
        <Typography fontSize="96px" fontWeight="300">
          {city}
        </Typography>
        <Typography fontSize="96px" fontWeight="300">
          {Math.round(temp)}°C
        </Typography>
        <Typography fontSize="40px" fontWeight="500">
          {description}
        </Typography>
      </WidgetContainer>
      <DateContainer>
        <Typography fontSize="48px">{getDate(date)}</Typography>
      </DateContainer>
    </MainInfoContainer>
  );
};

const MainInfoContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  borderRadius: '30px',
  padding: '80px',
  backgroundColor: '#627D95',
}));

const WidgetContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '30px',
  padding: '50px 150px 50px 50px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(236, 236, 236, 0.1)',
}));

const DateContainer = styled(Box)(() => ({
  borderRadius: '30px',
  padding: '30px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(236, 236, 236, 0.1)',
}));
