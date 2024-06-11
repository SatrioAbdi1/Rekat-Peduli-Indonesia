import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import "./globals.css";
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Montserrat({ subsets: ["latin"] });



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const windowed =  () => {
    window
  }
  return (
    <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>      
              {children}     
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
