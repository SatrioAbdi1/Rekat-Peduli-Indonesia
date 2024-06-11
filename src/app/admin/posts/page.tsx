import { Sidebar } from "@/components/Sidebar/Sidebar";
import { DataTable } from "@/components/Table/Table";
import { Post } from "@/lib/interface";
import {Typography, Box, Button} from '@mui/material'
import { PostsTable } from "./posts-table";



function createPost(
    id: string,
    title: string,
    author: string,
    category: string,
    createdAt: string,
    updatedAt: string,  
  ): Post {
    return { 
      id,
      title,
      author,
      category,
      createdAt,
      updatedAt,
     };
  }
  
  const rows = [
    createPost('1', 'How to Make Cupcake', 'Cupcake cup', 'Tutorial', '2012-07-14T01:00:00+01:00', '2012-07-14T01:00:00+01:00'),
  ];
  

export default function DashboardPage(){
    return(
        <Sidebar>
        {/* <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}> */}
            <Box sx={{display: 'flex', flexDirection : 'row', marginBottom : '24px', alignItems : 'center'}}>
                <Typography  variant="h4" fontWeight={500} mr={'16px'}>Postingan</Typography>
                <Button  variant="outlined">Tambah</Button>
            </Box>  
        <PostsTable posts={rows}/>
        
        </Sidebar>
    )
}

