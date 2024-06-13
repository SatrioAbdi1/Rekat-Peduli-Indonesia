import { ElevatedCard } from '@/components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";
import { get } from 'http';
import { getPosts } from '@/lib/services';


export default async function BlogsPage (){
    const posts = await getPosts()

    return(
        <DrawerAppBar>

        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh',
          }}>


            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px', marginTop : '72px', marginBottom : '64px'}}>
            <Grid container spacing={4}>
            {posts.map((item) => {
                return(
                    <Grid  key={item.id} item xs={4}>
                    <ElevatedCard data={item}/>
                    </Grid>
                )
            })

            }
         
    
             </Grid>
            {/* <Box display={'flex'} justifyContent={'center'} mt={'64px'}>
                <Pagination count={10} />
             </Box> */}
       
            </Container>
        </main>
        <Footer/>
        </DrawerAppBar>
    )
} 