import type { Metadata } from "next";
import localFont from 'next/font/local'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import "./globals.css";
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";
import { Montserrat } from "./font";

// const inter = Montserrat({ subsets: ["latin"] });



export const metadata: Metadata = {
  title : {
    template: '%s | Yayasan Rekat Peduli Indonesia',
    default : 'Yayasan Rekat Peduli Indonesia'
  },
  description : 'Kami yang tergabung dalam paguyuban TB-MDR adalah pasien-pasien yang sudah dinyatakan sembuh dari penyakit TB-MDR. Kami mempunyai inisiatif untuk membantu sesama penderita agar bisa melewati masa-masa terapi minum obat dengan tujuan mengurangi pasien putus obat. Munculnya ide mendirikan organisasi yang bernaung hukum berawal dari rapat anggota paguyuban pada tanggal 3 dan 4 Juni 2014.',
  metadataBase: new URL('https://rekat4indonesia.com')  
}

export const dynamic = 'force-dynamic'


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
        <body className={Montserrat.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>      
              {children}     
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
