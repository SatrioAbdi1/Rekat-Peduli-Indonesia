"use client"
import {TextField, Container, FormControl, Box, Typography, Button,Input} from '@mui/material';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import Link from 'next/link';
import { handleFormLogin } from './action';
import { useActionState } from "react";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function LoginPage(){
    const [state, formAction] = useActionState(handleFormLogin, null)


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
                    <form action={formAction} style={{display : 'flex', flexDirection : 'column'}}>
                    <Box sx={{marginBottom : '16px'}}>
                    <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Email</Typography>
                    <input name="email" type="email"  defaultValue={state?.email ?? ""} style={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '0px', color : 'black', height : '48px', width : '100%', padding: '8px',fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                    </Box>
                    
                    <Box sx={{marginBottom : '16px'}}>
                    <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Password</Typography>

                    <input name="password" type="password" defaultValue={state?.password ?? ""} style={{backgroundColor : 'white', borderRadius : '4px',borderWidth : '0px', color : 'black', marginBottom : '8px', height : '48px',  width : '100%', fontFamily : montserrat.style.fontFamily,padding: '8px', fontSize : '16px', fontWeight : 500}} id="outlined-basic"  type='password'  />
                    </Box>

                    <Typography color={'red'} variant='body1' fontWeight={500} marginBottom={'8px'}>{state?.message}</Typography>

                    <Button type="submit" sx={{ height : '48px'}} variant="contained">
                        <Link href='/admin/posts'>
                        Masuk
                        </Link>
                    </Button>
                </form>
                </Box>
            </Container>
        </main>
    )
}