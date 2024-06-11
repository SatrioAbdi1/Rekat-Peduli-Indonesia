import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography} from '@mui/material'


export default async function AddUsersPage(){
    return(
        <Sidebar>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Tambah User</Typography>
        </Sidebar>
    )
}