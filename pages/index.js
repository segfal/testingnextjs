import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import "./about"

import { Button, Container } from '@mui/material';
import { bgcolor, grid } from '@mui/system';
//import "./pic"
import { palette } from '@mui/system';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



export default function Index() {
  const router = useRouter();
  return (
    
    <div>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'text.primary'

      }}>
      <Box sx={{ 
        flexGrow: 4, }}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Paper>
              <Box p={5} sx={{
                bgcolor: 'text.primary',
                color: 'background.paper',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',

              }}>
                <h1 color = 'white'>About</h1>
                <p color="white" >
                 Welcome to my Page!
                </p>
                <Button variant="contained" color="primary" onClick={() => router.push('/about')}>
                  Go to home
                </Button>
                </Box>

                </Paper>
                </Grid>
                </Grid>


              </Box>
            </Container>

         

      </div>
    
  );
  //return <div>Hello Next.js</div>
  
}
