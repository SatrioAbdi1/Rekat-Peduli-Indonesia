import { Sidebar } from "@/components/Sidebar/Sidebar";
import {Typography, Button, Box} from '@mui/material'
import { UsersTable } from "./users.table";
import { User } from "@/lib/interface";
import Link from "next/link";

function createUsers(
    id: string,
    name: string,
    email: string,
    role: string,
    createdAt: string,
    updatedAt: string,    
  ): User {
    return { 
        id,
        name,
        email,
        role,
        createdAt,
        updatedAt,        
     };
  }
  
  const rows = [
    createUsers('1', 'How to Make Cupcake', 'Cupcake cup', 'Tutorial', '2012-07-14T01:00:00+01:00', '2012-07-14T01:00:00+01:00'),
  ];
  

export default async function UsersPage(){
    return(
        <Sidebar>
            <Box sx={{display: 'flex', flexDirection : 'row', marginBottom : '24px', alignItems : 'center'}}>
            <Typography  variant="h4" fontWeight={500} mr={'16px'}>Users</Typography>
            <Link href={'/admin/users/add'}>
            <Button  variant="outlined">Tambah</Button>
            </Link>
            </Box>
            <UsersTable users={rows}/>
        </Sidebar>

    )
}