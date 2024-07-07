"use client"
import { FormEvent, useActionState, useState } from "react"
import {TextField, Container, FormControl, Box, Typography,Input} from '@mui/material';
import { handleFormLogin } from "./action"
import { Montserrat } from 'next/font/google'
import { useRouter } from "next/navigation"
import { Button } from "@/components/Button";
const montserrat = Montserrat({ subsets: ['latin'] })


export function FormLogin(){
    // const [state, formAction] = useActionState<{email: any, password: any, message: any}, FormData>(handleFormLogin, {email: '', password: '', message: ''})
    const router = useRouter()
    const [formState, setFormState] = useState({
        message: '',
    });

    const [loading, setLoading] = useState(false)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        if(email === '' || password === ''){
            setFormState({
                message: 'Email dan Password tidak boleh kosong'
            })
           return;
        }
        
        try {
            const res = await handleFormLogin(email, password);
            if (res?.success) {
                router.push('/pasien'); // Redirect on success
            } 
        } catch (error) {
            console.error(error); // Log the error for debugging purposes
            setFormState({
                message: 'Failed to login. Please try again later.' // User-friendly error message
            });
        }finally{
          setLoading(false)
        }
        
        setLoading(false)

        
    }

    return(
        <form onSubmit={onSubmit} style={{display : 'flex', flexDirection : 'column'}}>
        <Box sx={{marginBottom : '16px'}}>
        <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Email</Typography>
        <input name="email" type="email"  style={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '0px', color : 'black', height : '48px', width : '100%', padding: '8px',fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
        </Box>
        
        <Box sx={{marginBottom : '16px'}}>
        <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Password</Typography>

        <input name="password" type="password" style={{backgroundColor : 'white', borderRadius : '4px',borderWidth : '0px', color : 'black', marginBottom : '8px', height : '48px',  width : '100%', fontFamily : montserrat.style.fontFamily,padding: '8px', fontSize : '16px', fontWeight : 500}} id="outlined-basic" />
        </Box>

        <Typography color={'red'} variant='body1' fontWeight={500} marginBottom={'8px'}>{formState?.message}</Typography>

        <Button loading={true} type="submit" sx={{ height : '48px'}} variant="contained">
            Masuk
        </Button>
    </form>
    )
}