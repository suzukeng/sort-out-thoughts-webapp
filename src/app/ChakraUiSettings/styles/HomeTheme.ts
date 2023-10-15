'use client'
import { extendTheme } from "@chakra-ui/react";
//ref:https://github.com/chakra-ui/chakra-ui/discussions/4828
export const HomeTheme = extendTheme({
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
    }
  }
});