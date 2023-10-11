"use client";
import { AboutTheme } from './styles/AboutTheme'
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
export default function AboutUiProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={AboutTheme}>{children}</ChakraProvider>
}