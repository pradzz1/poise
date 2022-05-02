import React, { useState, useEffect } from 'react';
import Charts from '../components/charts/chart';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dashboard");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    document.title =`${name}`
  });

  return (
    <><Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={8}>
                  <Item>
                      
                      
                      
                      <Card sx={{ minWidth: 275 }}>
                      <CardActions>
                      <Tooltip title="Reload">
      <IconButton>
      <ReplayIcon></ReplayIcon>
      </IconButton>
    </Tooltip>
    <Tooltip title="Options">
      <IconButton>
      <MoreVertIcon></MoreVertIcon>
      </IconButton>
    </Tooltip>
                    
                     
      </CardActions>
      <CardContent>
      <Charts></Charts>
      </CardContent>
     
    </Card>
                      
                      
                      
                      
                      </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item><p>You clicked {count} times</p>
                  <p>You clicked {name} times</p>


                  <button onClick={() => setCount(count + 1)}>
                      count
                  </button>
                  <button onClick={() => setCount(count + 1)}>
                      name
                  </button></Item>
              </Grid>
              <Grid item xs={12}>
                  <Item>xs-12</Item>
              </Grid>
          </Grid>
      </Box></>
  );
}