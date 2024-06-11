import * as React from 'react';
import {Button, Box,TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { Post } from '@/lib/interface';
import Link from 'next/link';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export interface DataTableProps {
  posts : Post[]
}

export function PostsTable({posts}: DataTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100, overflow : 'auto', whiteSpace : 'nowrap' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Judul</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Penulis</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Kategori</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Tanggal ditulis</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Tanggal diedit</Typography></TableCell>
            <TableCell sx={{maxWidth : '150px'}} ><Typography variant='subtitle1' fontWeight={600}>Aksi</Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell >{row.author}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.updatedAt}</TableCell>
              <TableCell>
                <Box display={'flex'} flexDirection={'row'}>
                <Link href="/admin/posts/edit">
                <Button color='inherit' sx={{marginRight : '8px'}} variant='contained'>Edit</Button>
                </Link>
                <Button variant='contained'>Hapus</Button>
                </Box>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
