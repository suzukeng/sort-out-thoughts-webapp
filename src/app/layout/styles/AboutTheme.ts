'use client'
import { extendTheme } from "@chakra-ui/react";
//ref:https://github.com/chakra-ui/chakra-ui/discussions/4828
export const AboutTheme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900',
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h2: {
        marginBottom:'2px',
        fontSize: '3xl',
        fontWeight: 'bold',
      },
      p:{
        marginLeft:'8px',
        fontSize:'xl',
        a:{
          color:'blue.600',
        },
      },
      ul:{
        marginTop:'5px',
        marginBottom:'5px',
        fontSize:'md',
        marginLeft:'4%'
      }
    }
  }
});