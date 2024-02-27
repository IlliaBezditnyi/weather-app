import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const WeatherCard: FC = () => {
  return (
    <CardContainer>
      <CardHeader
        sx={{ alignSelf: 'flex-end', padding: 0 }}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ width: '100%', padding: 0, mb: 5 }}>
        <Typography fontSize="25px" gutterBottom>
          Kyiv
        </Typography>
        <Typography fontSize="100px">5&deg;</Typography>
        <Typography fontSize="16px" sx={{ mb: 10 }}>
          Smoke
        </Typography>
        <WidgetContainer>
          <WidgetWrapper>
            <TitleText>Humidity</TitleText>
            <ValueText>75%</ValueText>
          </WidgetWrapper>
          <DividerWrapper orientation="vertical" variant="middle" flexItem />
          <WidgetWrapper>
            <TitleText>Feels like</TitleText>
            <ValueText>5&deg;</ValueText>
          </WidgetWrapper>
          <DividerWrapper orientation="vertical" variant="middle" flexItem />
          <WidgetWrapper>
            <TitleText>Pressure</TitleText>
            <ValueText>1024 hPa</ValueText>
          </WidgetWrapper>
        </WidgetContainer>
      </CardContent>
      <CardActions>
        <Button color="primary" size="large">
          See more
        </Button>
      </CardActions>
    </CardContainer>
  );
};

const CardContainer = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px 30px',
  maxWidth: '450px',
  backgroundColor: '#262626',
  color: '#fff',
}));

const WidgetContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #fff',
  borderRadius: '20px',
  padding: '20px',
}));

const WidgetWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
}));

const DividerWrapper = styled(Divider)(() => ({
  backgroundColor: '#fff',
}));

const TitleText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 500,
}));

const ValueText = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}));
