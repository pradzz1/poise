import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Charts from '../charts/chart';
import Cards from '../cards/cards';
import Button from '../button/button'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Layout( ) {
  return (
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Charts></Charts>
        </Grid>
        <Grid item xs={4}>
         <Cards></Cards>
        </Grid>
        <Grid item xs={4}>
          <Item><Button lable={"Click Me"} ></Button></Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default Layout;