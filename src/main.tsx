
import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import './index.css';
import App from './App.tsx';

function Root() {
    const prefersDarkMode = useMediaQuery(
        '(prefers-color-scheme: dark)'
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: prefersDarkMode ? '#c084fc' : '#aa3bff',
                    },
                    background: {
                        default: prefersDarkMode ? '#16171d' : '#f5f6fa',
                        paper: prefersDarkMode ? '#242630' : '#ffffff',
                    },
                    text: {
                        primary: prefersDarkMode ? '#f3f4f6' : '#08060d',
                        secondary: prefersDarkMode ? '#9ca3af' : '#6b6375',
                    },
                },
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Root />
    </StrictMode>
);
