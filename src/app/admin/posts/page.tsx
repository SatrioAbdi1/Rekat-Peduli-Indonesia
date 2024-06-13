import { DataTable } from "@/components/Table/Table";
import { Post } from "@/lib/interface";
import {Typography, Box, Button} from '@mui/material'
import { PostsTable } from "./posts-table";
import Link from "next/link";
import { deletePost, getPosts } from "@/lib/services";
import { redirect } from "next/navigation";
import { ButtonLogout } from "@/components/ButtonLogout";
import { Sidebar } from "@/components/Sidebar/Sidebar";





  

export default async function DashboardPage(){
  const posts = await getPosts();
    return(
        <Sidebar>
        {/* <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}> */}
          <Box display={'flex'} flexDirection={'row'} marginBottom={'24px'} justifyContent={'space-between'}>
            <Box sx={{display: 'flex', flexDirection : 'row', alignItems : 'center'}}>
                <Typography  variant="h4" fontWeight={500} mr={'16px'}>Postingan</Typography>
                <Link href={'/admin/posts/add'}>
                <Button  variant="outlined">Tambah</Button>
                </Link>
            </Box> 
            <ButtonLogout/>
          </Box>
        <PostsTable posts={posts} deletePost={async (id) => {
            "use server"
            deletePost(id)
            redirect('/admin/posts')
            
          }}/>
        
        </Sidebar>
    )
}

