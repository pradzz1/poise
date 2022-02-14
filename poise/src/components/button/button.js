import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({lable}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">{lable}</Button>
      <Button variant="contained" color="success">
        {lable}
      </Button>
      <Button variant="outlined" color="error">
        {lable}
      </Button>
    </Stack>
  );
}