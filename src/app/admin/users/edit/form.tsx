"use client"
import {TextField, Container, Grid,Input,NativeSelect,MenuItem, Typography, Button,Box} from '@mui/material';
import { Montserrat } from 'next/font/google'
import { useActionState } from "react"
import { handleForm } from './action';
import { User } from '@/lib/interface';


const montserrat = Montserrat({ subsets: ['latin'] })

interface FormEditUserProps {
    id : number,
    data : Partial<User>
}

export const FormEditUser = ({id, data} : FormEditUserProps) => {
    const[state, formAction] = useActionState((formState : any, formData : FormData) => handleForm(formState, formData, id), {
        name : data.name,
        email : data.email,
        role : data.role,
    
    })
    return(
        <Box sx={{width : {sm : '100%'}}}>
            <form style={{marginTop : '36px'}} action={formAction}>
                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Nama Lengkap</Typography>
                <Input name="name" defaultValue={state.name} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {xs : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Email</Typography>
                <Input name="email" defaultValue={state.email} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {xs : '100%',md :'36vh'},fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>
                
                <Box sx={{marginBottom : '32px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Role</Typography>
                <NativeSelect
                    id="demo-simple-select"
                    defaultValue={state.role}
                    name='role'
                    // onChange={handleChange}
                >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </NativeSelect>                
                </Box>

        

                <Box sx={{marginBottom : '16px'}}>
                <Box>
                <Typography variant='body1' fontWeight={500}>Password Baru</Typography>
                <Typography variant='body2' color={'grey'}  fontWeight={500} marginBottom={'8px'}>*jika tidak ingin mengubah password tidak perlu diisi</Typography>

                </Box>
                <Input defaultValue={state.password} type='password' name="change_password" sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px',width : {xs : '100%',md :'36vh'},fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box sx={{marginBottom : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Konfirmasi Password Baru</Typography>
                <Input defaultValue={state.password_confirm} type='password' name="change_password_confirm" sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px',width : {xs : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>

                <Box>
                    <Typography color={'red'} variant='body1' fontWeight={500} marginBottom={'8px'}>{state.message}</Typography>
                </Box>

                <Button type="submit" sx={{ mt : '36px',width : {xs : '100%',md :'10vh'}}} variant='contained' >
                    Simpan
                </Button>


            </form>
        </Box>
    )
}   