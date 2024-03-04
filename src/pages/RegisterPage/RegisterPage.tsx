import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import backgroundImage from '../../assets/images/background.png';
import { SignUp } from '../../components/AuthComponents/SignUp/SignUp';

export const RegisterPage: FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Typography fontSize="48px">Register</Typography>
        <SignUp />
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
}));

const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#262626',
  minWidth: '600px',
  borderRadius: '30px',
  padding: '50px 100px',
  gap: '50px',
  color: '#fff',
}));
