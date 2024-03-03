import { FC, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

interface WeatherCardProps {
  name: string;
  temp: number;
  description: string;
  humidity: number;
  feels_like: number;
  pressure: number;
  onRemoveClick: () => void;
  onRefreshClick: () => void;
  onSeeMoreClick: () => void;
}

export const WeatherCard: FC<WeatherCardProps> = ({
  name,
  temp,
  description,
  humidity,
  feels_like,
  pressure,
  onRemoveClick,
  onRefreshClick,
  onSeeMoreClick,
}) => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const dispatch = useAppDispatch();
  // const { city } = useAppSelector((state) => state.location.cities);

  // const handleRemoveFromCities = () => {
  //   dispatch(removeFromCities(city));
  // };

  return (
    <CardContainer>
      <CardHeader
        sx={{
          alignSelf: 'flex-end',
          padding: 0,
        }}
        action={
          <>
            <IconButton onClick={() => onRefreshClick()} sx={{ color: '#fff' }}>
              <RefreshOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => onRemoveClick()} sx={{ color: 'red' }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            {/* <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Update info</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu> */}
          </>
        }
      />
      <CardContent sx={{ width: '100%', padding: 0, mb: 5 }}>
        <Typography fontSize="25px" gutterBottom>
          {name}
        </Typography>
        <Typography fontSize="100px">{temp}&deg;</Typography>
        <Typography fontSize="16px" sx={{ mb: 10 }}>
          {description}
        </Typography>
        <WidgetContainer>
          <WidgetWrapper>
            <TitleText>Humidity</TitleText>
            <ValueText>{humidity}%</ValueText>
          </WidgetWrapper>
          <DividerWrapper orientation="vertical" variant="middle" flexItem />
          <WidgetWrapper>
            <TitleText>Feels like</TitleText>
            <ValueText>{feels_like}&deg;</ValueText>
          </WidgetWrapper>
          <DividerWrapper orientation="vertical" variant="middle" flexItem />
          <WidgetWrapper>
            <TitleText>Pressure</TitleText>
            <ValueText>{pressure} hPa</ValueText>
          </WidgetWrapper>
        </WidgetContainer>
      </CardContent>
      <CardActions>
        <Button onClick={() => onSeeMoreClick()} color="primary" size="large">
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
  minWidth: '400px',
  backgroundColor: '#262626',
  color: '#fff',
}));

const WidgetContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(236, 236, 236, 0.1)',
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
