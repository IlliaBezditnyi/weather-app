import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { HourlyCard } from './HourlyCard/HourlyCard';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

interface HourlyForecastProps {
  hourlyForecast: any[];
  timezone: string;
}

export const HourlyForecast: FC<HourlyForecastProps> = ({
  hourlyForecast,
  timezone,
}) => {
  return (
    <ForecastContainer>
      <ForecastTitle>
        <AccessTimeIcon />
        <Typography fontSize="36px">Hourly Forecast</Typography>
      </ForecastTitle>
      <ForecastItems>
        {hourlyForecast &&
          hourlyForecast
            .slice(0, 11)
            .map((item, index) => (
              <HourlyCard
                key={index}
                icon={item?.weather[0].icon}
                temp={item?.temp}
                time={
                  index === 0
                    ? 'Now'
                    : dayjs.unix(item.dt).tz(timezone).format('HH:mm')
                }
              />
            ))}
      </ForecastItems>
    </ForecastContainer>
  );
};

const ForecastContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '60px',
  borderRadius: '30px',
  padding: '40px 72px',
  backgroundColor: '#627D95',
}));

const ForecastTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const ForecastItems = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '24px',
}));
