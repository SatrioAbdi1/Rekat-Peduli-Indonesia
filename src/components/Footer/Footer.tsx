import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Link from 'next/link';




export const Footer = () => {
    return(
        <div style={{backgroundColor : '#F13C28',width : '100%'}}>
        <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px',paddingTop : '64px', paddingBottom : '64px'}}>
            <Box flexDirection={'row'} display={'flex'}>
                <Box flexDirection={'column'}>
                    <div style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Image 
                            src={'/rekat.png'}
                            alt='logo rekat'
                            width={37}
                            height={37}
                        />
                        <Typography variant='subtitle1' color={'white'} marginLeft={'16px'} fontWeight={600}>Yayasan Rekat Peduli Indonesia</Typography>
                    </div>
                    <Typography variant='subtitle1' marginTop={'8px'} color={'white'}>Jl. A. Yani 242 - 244, Gayungan, Surabaya.</Typography>

                    <Box flexDirection={'column'} marginTop={'16px'}>
                        <Typography variant='subtitle1' fontWeight={600} color={'white'} marginBottom={'8px'}>Hubungi Kami</Typography>
                        <Typography variant='subtitle1' color={'white'}>Email : rekatpeduli@gmail.com</Typography>
                        <Typography variant='subtitle1' color={'white'}>Youtube : <Link style={{textDecoration : 'underline'}} target='_blank' href={'https://www.youtube.com/channel/UCKb6Q8p9piM3IzmNuj-U9gA'}>Rekat Peduli Indonesia</Link></Typography>
                        <Typography variant='subtitle1' color={'white'}>Facebook : <Link style={{textDecoration : 'underline'}} target='_blank' href={'https://web.facebook.com/rekatsurabaya?_rdc=1&_rdr'}>@rekat4indonesia</Link></Typography>
                        <Typography variant='subtitle1' color={'white'}>Instagram : <Link style={{textDecoration : 'underline'}} target='_blank' href={'https://www.instagram.com/rekat4indonesia/'}>Rekat Peduli Indonesia</Link></Typography>
                    </Box>
                </Box>
                <Box flexDirection={'column'} marginLeft={'64px'} marginTop={'4px'}>
                    <Typography variant='subtitle1' color={'white'} fontWeight={600} marginBottom={'16px'}>Halaman</Typography>
                    <Typography variant='subtitle1' color={'white'}><Link href={'/'}>Beranda</Link></Typography>

                    <Typography variant='subtitle1' color={'white'}><Link href={'/profil'}>Profil</Link></Typography>
                    <Typography variant='subtitle1' color={'white'}><Link href={'/kegiatan'}>Kegiatan</Link></Typography>
                    <Typography variant='subtitle1' color={'white'}><Link href={'/galeri'}>Galeri</Link></Typography>
                    <Typography variant='subtitle1' color={'white'}><Link href={'/blog'}>Blog</Link></Typography>


                </Box>
            </Box>
        </Container>
        </div>
    )
}