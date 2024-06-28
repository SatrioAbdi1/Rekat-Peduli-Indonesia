"use client"
import {useState,useActionState,} from 'react'
import {Box, Typography, Input, Button, NativeSelect} from '@mui/material';
import { handleForm } from './action';
import { Editor } from '@/components/CKeditor';
import axios from 'axios';
import { Montserrat } from '@/app/font';


const montserrat = Montserrat;

export function FormAddPost(){
    const [dataEditor, setDataEditor] = useState<string>('')
    const [filePath, setFilePath] = useState('');
    const [state, formAction] = useActionState(
        (_ : any, formData : FormData) => handleForm(_, formData, dataEditor, filePath), null
    )

    const onChangeEditor = (value : string) => {
        console.log(value ,'valuenya')
        setDataEditor(value)
    }

    const onFileChange = async e => {
        const formData = new FormData();
        formData.append('upload', e.target.files[0]);
        formData.append('ckCsrfToken', "e.target.files[0]");
    
        try {
          const res = await axios.post('https://api.rekat4indonesia.com/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          const { url } = res.data;
          setFilePath(url);
        } catch (err) {
          console.log(err ,'errornya')
        }
      };
    


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
                
                <Box sx={{marginBottom : '32px', display: 'flex', flexDirection: 'column'}}>
                <Typography variant='body1' fontWeight={500} marginBottom={'8px'}>Thumbnail Image URL</Typography>
                <Input onChange={onFileChange} type='file' name="thumbnail" defaultValue={state?.thumbnail} sx={{backgroundColor : 'white',borderRadius : '4px', borderWidth : '1px', color : 'black', height : '36px', width : {sm : '100%',md :'36vh'}, fontFamily : montserrat.style.fontFamily, fontSize : '16px', fontWeight : 500}} id="outlined-basic"   />
                
                {filePath && <img src={filePath} style={{width: '300px', marginTop : '16px'}} />}

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