import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';




export default async function PublikasiPage() {
    return(
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>

            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px', marginTop : '72px', marginBottom : '64px'}}>
            <Typography variant='h5' fontWeight={600}>Youtube</Typography>
            <Grid container spacing={4} mt={'4px'}>
            <Grid item xs={4}>
            <iframe width="300" height="190" src="https://www.youtube-nocookie.com/embed/sujC4evTekU?si=J3u6Up0HktjRRCmL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid>

            <Grid item xs={4}>
            <iframe width="300" height="190" src="https://www.youtube-nocookie.com/embed/pn61x7syc9o?si=zy1uSG-p0yJFR6JR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid>

            <Grid item xs={4}>
            <iframe width="300" height="190" src="https://www.youtube-nocookie.com/embed/pn61x7syc9o?si=zy1uSG-p0yJFR6JR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid>

            </Grid>

            <Typography variant='h5' fontWeight={600} mt={'64px'}>Instagram</Typography>
                <Typography mt={'4px'}>Coming Soon</Typography>

            </Container>
        </main>
    )
}