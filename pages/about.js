import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import "./about"

import { Button, Container } from '@mui/material';
import { bgcolor, createTheme, grid } from '@mui/system';
//import "./pic"
import { palette } from '@mui/system';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import next from "next";
import { ThemeProvider } from '@emotion/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//mport { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';


import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

export default function About() {
    const router = useRouter();
    
    return (
    <div>
        <ThemeProvider theme={theme}>
            Hello World

            
            </ThemeProvider>


            




    </div>)


    }