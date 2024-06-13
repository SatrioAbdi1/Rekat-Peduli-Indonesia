import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material'
import { getUser } from "@/lib/services";
import { FormAddPost } from "./form";

export default async function EditUserPage(request : {searchParams : {id: number}, params : Object}){
    const {searchParams} = request
    const id = searchParams.id

    const user = await getUser(1);
    
    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Tambah Post</Typography>
            <FormAddPost/>
        </Sidebar>
    )
}