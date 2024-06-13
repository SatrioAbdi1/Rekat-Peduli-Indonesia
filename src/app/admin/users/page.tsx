import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography, Button, Box} from '@mui/material'
import { UsersTable } from "./users.table";
import { User } from "@/lib/interface";
import Link from "next/link";
import { getUsers } from "@/lib/query";

export default async function UsersPage(){
  const users = await getUsers();
    return(
        <Sidebar>
            <Box sx={{display: 'flex', flexDirection : 'row', marginBottom : '24px', alignItems : 'center'}}>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Users</Typography>
            <Link href={'/admin/users/add'}>
            <Button  variant="outlined">Tambah</Button>
            </Link>
            </Box>
            <UsersTable users={users}/>
        </Sidebar>

    )
}