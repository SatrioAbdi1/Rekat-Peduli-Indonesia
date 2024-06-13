import { Sidebar } from "@/components/Sidebar/Sidebar";
import { DataTable } from "@/components/Table/Table";
import { Post } from "@/lib/interface";
import {Typography, Box, Button} from '@mui/material'
import { PostsTable } from "./posts-table";
import Link from "next/link";
import { deletePost, getPosts } from "@/lib/services";
import { redirect } from "next/navigation";




  

export default async function DashboardPage(){
  const posts = await getPosts();
    return(
        <Sidebar>
        {/* <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}> */}
            <Box sx={{display: 'flex', flexDirection : 'row', marginBottom : '24px', alignItems : 'center'}}>
                <Typography  variant="h4" fontWeight={500} mr={'16px'}>Postingan</Typography>
                <Link href={'/admin/posts/add'}>
                <Button  variant="outlined">Tambah</Button>
                </Link>
            </Box>  
        <PostsTable posts={posts} deletePost={async (id) => {
            "use server"
            deletePost(id)
            redirect('/admin/posts')
            
          }}/>
        
        </Sidebar>
    )
}

