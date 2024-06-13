import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Image from 'next/image';
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";
import { getPost } from '@/lib/services';
import { RenderHtml } from '@/components/RenderHtml';


export default async function BlogPage({ params,searchParams }: { params: { slug: string }, searchParams : {id: number} }) {
    const id = searchParams.id
    const post =  await getPost(id)


    return (
        <DrawerAppBar>

        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>

            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px', marginTop : '72px', marginBottom : '64px'}}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant='h5' fontWeight={600}>Tahukah Kamu Pencegahan TBC Dapat Dimulai Dari Diri Sendiri?</Typography>
                <Box display={'flex'} flexDirection={'row'}>
                <Typography variant='subtitle2' fontWeight={550} mt={'16px'}>Satrio Abdi</Typography>
                <Typography variant='subtitle2' fontWeight={550} mt={'16px'} mx={'8px'}>|</Typography>
                <Typography variant='subtitle2' fontWeight={550} mt={'16px'} color={'#F13C28'}>{post.category}</Typography>

                </Box>
                <Typography  variant='subtitle2' color={'GrayText'}>{post.createdAt?.toString()}</Typography>
                <Image src={post.thumbnail} alt="" width={1000} height={1000} style={{width : '100%', height :'auto', borderRadius : '12px', marginTop : '34px'}}/>                
            </Box>

            <Box mt={'64px'}>
                <RenderHtml content={post.content}/>
            </Box>
        

            </Container>
        </main>
        <Footer/>
        </DrawerAppBar>

    )
  }