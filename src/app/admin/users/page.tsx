import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography, Button, Box} from '@mui/material'
import { UsersTable } from "./users.table";
import { User } from "@/lib/interface";
import Link from "next/link";
import { getUsers } from "@/lib/services";
import { ButtonLogout } from "@/components/ButtonLogout";

export default async function UsersPage(){
  const users = await getUsers();
    return(
        <Sidebar>
            <Box display={'flex'} flexDirection={'row'} marginBottom={'24px'} justifyContent={'space-between'}>
            <Box sx={{display: 'flex', flexDirection : 'row', alignItems : 'center'}}>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Users</Typography>
                <Link href={'/admin/users/add'}>
                <Button  variant="outlined">Tambah</Button>
                </Link>
            </Box> 
            <ButtonLogout/>
          </Box>
            <UsersTable users={users}/>
        </Sidebar>

    )
}