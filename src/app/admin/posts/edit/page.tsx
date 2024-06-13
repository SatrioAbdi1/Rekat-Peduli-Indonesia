import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material';
import { FormEditPost } from "./form";
import { getPost } from "@/lib/services";
import { FormAddPost } from "../add/form";


export default async function EditPostPage(request : {searchParams : {id: number}, params : Object}){
    const {searchParams} = request
    const id = searchParams.id

    const post = await getPost(id);

    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Edit Post</Typography>
            <FormEditPost data={post} id={id}/>
        </Sidebar>
    )
}