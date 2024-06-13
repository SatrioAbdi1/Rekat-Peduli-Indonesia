"use client"
import {useState,useActionState} from 'react'
import {Box, Typography, Input, Button, NativeSelect} from '@mui/material';
import { Montserrat } from 'next/font/google'
import { handleForm } from './action';
import { Editor } from '@/components/CKeditor';


const montserrat = Montserrat({ subsets: ['latin'] })

export function FormAddPost(){
    const [dataEditor, setDataEditor] = useState<string>('')

    const [state, formAction] = useActionState(
        (_ : any, formData : FormData) => handleForm(_, formData, dataEditor), null
    )

    const onChangeEditor = (value : string) => {
        setDataEditor(value)
    }

    return(
        <Box maxWidth={"lg"}>
            <form style={{marginTop : "36px"}} action={formAction}>
                <Box sx={{marginBottom : '32px'}}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'end'} marginBottom={'8px'}>
                <Typography variant='body1' fontWeight={500}>Judul</Typography>
                <Typography variant='caption' color="grey" marginLeft={'8px'} fontWeight={500}> (max 60 karakter)</Typography>

                </Box>
                <Input name="title" defaultValue={state?.title} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', minWidth : {sm : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>
                
                <Box sx={{marginBottom : '32px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Thumbnail Image URL</Typography>
                <Input type='url' name="thumbnail" defaultValue={state?.thumbnail} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {sm : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                </Box>                              
                <Editor value={dataEditor} onChange={onChangeEditor}/>
                <Box sx={{marginBottom : '16px', marginTop : '16px'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Kategori</Typography>
                <NativeSelect
                    id="demo-simple-select"
                    defaultValue={state?.category || 'artikel'}
                    name='category'
                >
                    <option value="Artikel">Artikel</option>
                    <option value="Dampak Kami">Dampak Kami</option>
                </NativeSelect>                
                </Box>

                <Typography color={'red'} variant='body1' fontWeight={500} marginBottom={'8px'}>{state?.message}</Typography>


                <Button type="submit" sx={{ mt : '36px',width : {sm : '100%',md :'84px'}}} variant='contained' >
                    Simpan
                </Button>
            </form>          
        </Box>

    )    
}