import { FC } from 'react';
import { Box, IconButton, TextField, Typography, styled } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Header: FC = () => {
  return (
    <AppBarContainer sx={{ flexGrow: 1 }}>
      {/* <AppBarContainer position="static"> */}
      <LogoWrapper>
        <WbSunnyOutlinedIcon sx={{ color: 'primary.light' }} />
        <Typography fontSize="32px">Weather App</Typography>
      </LogoWrapper>

      <form action="">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a city..."
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
      {/* </AppBarContainer> */}
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
