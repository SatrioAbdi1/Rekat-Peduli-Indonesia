import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material'
import { FormEditUser } from "./form";
import { getUser } from "@/lib/services";

export default async function EditUserPage(request : {searchParams : {id: number}, params : Object}){
    const {searchParams} = request
    const id = searchParams.id

    const user = await getUser(id);
    
    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Edit User {id}</Typography>
            <FormEditUser id={id} data={user} />
        </Sidebar>
    )
}