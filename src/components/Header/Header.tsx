import { FC, useLayoutEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  TextField,
  Typography,
} from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  getCityLocation,
  getCityWeather,
} from '../../store/slices/weatherSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthHook } from '../../hooks/useAuthHook';
import React from 'react';
import { removeUser } from '../../store/slices/userSlice';

interface HeaderProps {
  disabledSearch?: boolean;
}

export const Header: FC<HeaderProps> = ({ disabledSearch }) => {
  // Search bar state.
  const [searchValue, setSearchValue] = useState('');

  const { isAuth, email } = useAuthHook();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { lat, lon } = useAppSelector((state) => state.weather.location);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Making request when user typed data in search bar and submit.
  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCityLocation(searchValue));
    setSearchValue('');
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handling logout of user, from top right menu button.
  const handleUserLogOut = () => {
    dispatch(removeUser());
    setAnchorEl(null);
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatch(getCityWeather([lat, lon]));
  }, [lat, lon, dispatch]);

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item display="flex" alignItems="center" gap={2} xs={2}>
        <WbSunnyOutlinedIcon sx={{ color: '#F7DE3A' }} />
        <Typography sx={{ color: '#6596B9' }} fontSize="32px">
          Weather App
        </Typography>
      </Grid>

      <Grid item xs={5}>
        <form onSubmit={onSearchSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a city..."
            onChange={onSearchChange}
            value={searchValue}
            disabled={disabledSearch}
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <IconButton
                  size="large"
                  type="submit"
                  disabled={location.pathname === '/details' ? true : false}
                  sx={{ color: '#6596B9' }}
                >
                  <SearchOutlinedIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      </Grid>

      <Grid item xs={0}>
        <IconButton
          onClick={() => navigate('/')}
          sx={{ color: '#6596B9' }}
          size="large"
          disabled={location.pathname === '/details' ? false : true}
        >
          <HomeOutlinedIcon />
        </IconButton>
        {isAuth && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: '#6596B9' }}
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <Typography sx={{ color: '#000', padding: '10px' }}>
                {email}
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Button onClick={handleUserLogOut}>Log out</Button>
              </Box>
            </Menu>
          </>
        )}
      </Grid>
    </Grid>
  );
};
