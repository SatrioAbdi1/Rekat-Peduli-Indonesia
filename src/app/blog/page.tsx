import { ElevatedCard } from '@/components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";


export default async function BlogsPage (){
    return(
        <DrawerAppBar>

        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>

            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px', marginTop : '72px', marginBottom : '64px'}}>
            <Grid container spacing={4}>
            {[1,2,3,4,5,6,7,8,9].map((item) => {
                return(
                    <Grid item xs={4}>
                    <ElevatedCard/>
                    </Grid>
                )
            })

            }
         
    
             </Grid>
            <Box display={'flex'} justifyContent={'center'} mt={'64px'}>
                <Pagination count={10} />
             </Box>
       
            </Container>
        </main>
        <Footer/>
        </DrawerAppBar>
    )
} 