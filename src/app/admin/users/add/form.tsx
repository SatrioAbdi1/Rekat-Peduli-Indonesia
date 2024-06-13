"use client"
import {TextField, Container, Grid,Input,NativeSelect,MenuItem, Typography, Button,Box} from '@mui/material';
import { Montserrat } from 'next/font/google'
import { useActionState } from "react"
import { handleForm } from './action';


const montserrat = Montserrat({ subsets: ['latin'] })


export const FormAddUser = () => {
    const[state, formAction] = useActionState(handleForm, null)
    return(
        <Box sx={{width : {md : '25vh'}}}>
            <form style={{marginTop : '36px'}} action={formAction}>
                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Nama Lengkap</Typography>
                <Input  name="name" defaultValue={state?.name}  sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {sm : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Email</Typography>
                <Input name="email" defaultValue={state?.email} type="email"  sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {sm : '100%',md :'36vh'},fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Password</Typography>
                <Input name="password" type="password"  defaultValue={state?.password} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px',width : {sm : '100%',md :'36vh'},fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Password Confirmation</Typography>
                <Input name="password_confirm" type="password" defaultValue={state?.password_confirm} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px',width : {sm : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Role</Typography>
                {/* <select style={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : '100vh', padding: '8px',fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}}>
                    <option value="18-24_bulan">18 - 24 Bulan</option>
                    <option value="9_Bulan">9 Bulan</option>
                    <option value="BPAL">BPAL</option>
                </select> */}
                <NativeSelect
                    id="demo-simple-select"
                    defaultValue={state?.role || 'admin'}
                    name='role'
                    // onChange={handleChange}
                >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </NativeSelect>                
                {/* <input style={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : '100%', padding: '8px',fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   /> */}
                </Box>

                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>{state?.message}</Typography>

                <Button type="submit" sx={{ mt : '36px',width : {sm : '100%',md :'36vh'}}} variant='contained' >
                    Simpan
                </Button>


            </form>
        </Box>
    )
}   