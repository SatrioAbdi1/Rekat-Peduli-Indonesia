import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Image from 'next/image';



export default  async function ProfilePage(){

    const dataVisiMisi = [
        'Meningkatkan aksesibilitas layanan diagnosis dan perawatan TBC.',
        'Meningkatkan kesadaran masyarakat tentang TBC.',
        'Menyediakan layanan holistik untuk pencegahan, diagnosis, dan pengobatan TBC.',
        'Berkolaborasi dengan berbagai pihak untuk memperkuat sistem kesehatan.',
        'Mendukung penelitian untuk inovasi dalam pengobatan dan pencegahan TBC.'
    ]
    
    return(
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>

            <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px', marginTop : '72px', marginBottom : '64px'}}>
                    <Typography textAlign={'center'} variant="h4" fontWeight={600}>Profil Yayasan Rekat Peduli Indonesia</Typography>
                    <Image src={'/about-us.jpg'} alt="" width={1000} height={1000} style={{width : '100%', height :'auto', borderRadius : '12px', marginTop : '36px'}}/>

                    <Typography marginTop={'36px'} fontWeight={550} variant="h5" >Tentang Kami</Typography>
                    <Typography marginTop={'8px'} fontWeight={500} variant='subtitle1'>
                                Kami yang tergabung dalam paguyuban TB-MDR adalah pasien-pasien yang sudah dinyatakan sembuh dari penyakit TB-MDR. 
                                Kami mempunyai inisiatif untuk membantu sesama penderita agar bisa melewati masa-masa terapi minum obat dengan tujuan mengurangi pasien putus obat. Munculnya ide mendirikan organisasi yang bernaung hukum berawal dari rapat anggota paguyuban pada tanggal 3 dan 4 Juni 2014.Atas berkat Rahmat Tuhan Yang Maha Esa dan dengan semangat kekeluargaan serta perasaan senasib sepenanggungan kami mendirikan organisasi yang bernama Rekat pada tanggal 23 Juni 2014.
                    </Typography>

                    <Typography marginTop={'36px'} fontWeight={550} variant="h5" >Visi dan Misi</Typography>

                    <Typography variant='h6' fontWeight={550} marginTop={'16px'}>Visi</Typography>

                    <Typography marginTop={'8px'} variant='subtitle1' fontWeight={500}>
                        Mewujudkan masyarakat bebas dari TBC dengan akses terhadap perawatan berkualitas dan kesadaran penuh tentang pencegahan.
                    </Typography>


                    <Typography variant='h6' fontWeight={550} marginTop={'16px'} marginBottom={'8px'}>Misi</Typography>

                    {dataVisiMisi.map((item,index) => {
                        return(
                            <Typography key={item} variant='subtitle1' fontWeight={500}>
                                {index + 1}. {item}
                            </Typography>
                        )
                    })}
               
            </Container>

        </main>
    )
}