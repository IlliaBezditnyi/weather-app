import { Box, Button, Typography, styled } from '@mui/material';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import { emailValidation, passwordValidation } from './validation';

interface AuthData {
  email: string;
  password: string;
}

interface FormProps {
  title: string;
  redirectLink: string;
  linkText: string;
  linkTitle: string;
  onFormSubmit: (email: string, password: string) => void;
}

export const Form: FC<FormProps> = ({
  title,
  redirectLink,
  linkText,
  linkTitle,
  onFormSubmit,
}) => {
  const { control, register, watch } = useForm<AuthData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // Getting inputs values in real time using react-hook-forms.
  const email = watch('email');
  const password = watch('password');

  return (
    <FormContainer>
      <InputsWrapper>
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          name="email"
          control={control}
          rules={emailValidation}
        />
        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
          name="password"
          control={control}
          rules={passwordValidation}
        />
      </InputsWrapper>

      <Box display="flex" gap="5px">
        <Typography>{linkText}</Typography>
        <Link to={redirectLink}>
          <Typography sx={{ color: '#6596b9' }}>{linkTitle}</Typography>
        </Link>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <FormButton
          type="submit"
          variant="contained"
          onClick={() => onFormSubmit(email, password)}
        >
          {title}
        </FormButton>
      </Box>
    </FormContainer>
  );
};

const FormContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
}));

const InputsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
}));

const FormButton = styled(Button)(() => ({
  minWidth: '200px',
  borderRadius: '30px',
  boxShadow: 'none',
  fontSize: '24px',
  fontWeight: 600,
}));
