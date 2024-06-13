"use client"
import * as React from 'react';
import {Button, Box,TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { Post } from '@/lib/interface';
import Link from 'next/link';

export interface DataTableProps {
  posts : Post[],
  deletePost : (id : number) => void
}

export function PostsTable({posts, deletePost}: DataTableProps) {
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
              <TableCell >{row.author_id}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.createdAt.toString()}</TableCell>
              <TableCell>{row.updatedAt.toString()}</TableCell>
              <TableCell>
                <Box display={'flex'} flexDirection={'row'}>
                <Link href={`/admin/posts/edit?id=${row.id}`}>
                <Button color='inherit' sx={{marginRight : '8px'}} variant='contained'>Edit</Button>
                </Link>
                <Button onClick={() => deletePost(row.id)} variant='contained'>Hapus</Button>
                </Box>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
