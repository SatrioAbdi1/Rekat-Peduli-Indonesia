"use client"
import {TextField, Container, FormControl, Box, Typography, Button,Input} from '@mui/material';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import Link from 'next/link';
import { handleFormLogin } from './action';
import { useActionState } from "react";
import { FormLogin } from './form';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function LoginPage(){
    // const [state, formAction] = useActionState(handleFormLogin, null)
    

    return(
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor : '#334155'
          }}>
            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px',justifyContent: 'center', display : 'flex', height : '100vh', alignItems : 'center'}}>
                <Box width={'400px'} padding={'16px'} sx={{backgroundColor : "#E5E7EB", borderRadius : '8px'}}>
                    <Box sx={{display: 'flex', justifyContent : 'center', flexDirection : 'column', alignItems :'center', marginBottom : '24px'}}>
                        <Image src={'/rekat.png'} width={100} height={100} alt='logo rekat'/>
                        <Typography variant='subtitle1' fontWeight={600} marginTop={'16px'}>Yayasan Peduli Rekat Indonesia</Typography>
                    </Box>
                <FormLogin/>
                </Box>
            </Container>
        </main>
    )
}