import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import 'lazysizes'

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
