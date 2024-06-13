import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material';
import { FormAddPost } from "./form";


export default function AddPostPage(){
    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Tambah Post</Typography>
            <FormAddPost/>
        </Sidebar>
    )
}