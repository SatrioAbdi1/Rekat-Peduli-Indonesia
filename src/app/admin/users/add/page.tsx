import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material'
import { FormAddUser } from "./form";



export default async function AddUserPage(){
    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Tambah User</Typography>
            <FormAddUser/>
        </Sidebar>
    )
}