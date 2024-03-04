/* eslint-disable react/display-name */
import { FormControl, FormHelperText, OutlinedInput } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type?: string;
  control: any;
  name: string;
  rules?: object;
}

export const Input = React.forwardRef(
  ({ placeholder, type, control, name, rules }: InputProps, ref: any) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FormControl variant="outlined" required>
            <OutlinedInput
              ref={ref}
              fullWidth={true}
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              error={Boolean(error)}
              sx={{ padding: '5px 20px', color: '#fff' }}
            />
            {error && (
              <FormHelperText sx={{ color: 'red' }}>
                {error.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    );
  },
);
