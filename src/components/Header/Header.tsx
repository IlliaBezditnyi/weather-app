import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, IconButton, TextField, Typography, styled } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  getCityLocation,
  getCityWeather,
} from '../../store/slices/locationSlice';

export const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();
  const { lat, lon } = useAppSelector((state) => state.location.location);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCityLocation(searchValue));
    setSearchValue('');
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatch(getCityWeather({ lat, lon }));
    console.log(`Weather: ${dispatch(getCityWeather([lat, lon]))}`);
  }, [lat, lon, dispatch]);

  return (
    <AppBarContainer sx={{ flexGrow: 1 }}>
      <LogoWrapper>
        <WbSunnyOutlinedIcon sx={{ color: 'primary.light' }} />
        <Typography fontSize="32px">Weather App</Typography>
      </LogoWrapper>

      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a city..."
          onChange={onSearchChange}
          value={searchValue}
          InputProps={{
            endAdornment: (
              <IconButton color="primary" size="large" type="submit">
                <SearchOutlinedIcon />
              </IconButton>
            ),
          }}
        />
      </form>

      <ButtonWrapper>
        <IconButton color="primary" size="large">
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton color="primary" size="large">
          <AccountCircleOutlinedIcon />
        </IconButton>
      </ButtonWrapper>
    </AppBarContainer>
  );
};

const AppBarContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const LogoWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const ButtonWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));
