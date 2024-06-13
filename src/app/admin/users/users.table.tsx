import * as React from 'react';
import {Button, Box,TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { Post, User } from '@/lib/interface';
import Link from 'next/link';



export interface UsersTableProps {
    users : Partial<User>[]
}

export function UsersTable({users}: UsersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100, overflow : 'auto', whiteSpace : 'nowrap' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Nama</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Email</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Role</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Aksi</Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Box display={'flex'} flexDirection={'row'}>
                <Link href={`/admin/users/edit?id=${row.id}`}>
                <Button color='inherit' sx={{marginRight : '8px'}} variant='contained'>Edit</Button>
                </Link>
                <Button  variant='contained'>Hapus</Button>
                </Box>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
