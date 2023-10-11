"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HomeTheme } from "./styles/HomeTheme";
import Home from "../page";
export default function UiProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={HomeTheme}>{children}</ChakraProvider>
}