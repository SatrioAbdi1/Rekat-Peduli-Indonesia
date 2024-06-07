import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Image from 'next/image';
import DrawerAppBar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Footer/Footer";





export default async function BlogPage({ params }: { params: { slug: string } }) {
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
                <Typography variant='subtitle2' fontWeight={550} mt={'16px'} color={'#F13C28'}>Tuberkolosis</Typography>

                </Box>
                <Typography  variant='subtitle2' color={'GrayText'}>Senin, 03 Jun 2024 07:58 WIB</Typography>
                <Image src={'/male-cough.jpg'} alt="" width={1000} height={1000} style={{width : '100%', height :'auto', borderRadius : '12px', marginTop : '34px'}}/>                
            </Box>

            <Box mt={'64px'}>
                <Typography variant='body1'>
                Saat ini Tuberkulosis (TBC) merupakan salah satu dari 10 penyebab kematian tertinggi yang disebabkan oleh mikroorganisme penyebab infeksi yakni bakteri, dan menjadi salah satu dari 10 masalah kesehatan yang menyerang semua siklus hidup manusia mulai dari bayi dan balita, anak-anak, remaja, usia produktif, dan lansia. Terdapat 10 negara penyumbang dua sepertiga dari total kasus TBC, seperti India (27,9%), Indonesia (9,2%), China (7,4%), Philippines (7,0%), Pakistan (5,8%), Nigeria (4,4%), Bangladesh (3,6%), Democratic Republic of the Chongo (2,9%), South Africa (2,9%), dan Myanmar (1,8%). Perkiraan jumlah kasus TBC di Indonesia pada tahun 2021 mencapai 969.000 atau 354 per 100.000 penduduk, dengan kasus TBC-HIV sebesar 22.000 kasus per tahun atau 8,1 per 100.000 penduduk.
                <br/>
               <br/>
Bakteri Mycobacterium tuberculosis yang menjadi penyebab Tuberkulosis dapat menyebar ketika pasien TBC paru BTA positif batuk atau bersin. Bakteri akan menyebar melalui percikan dahak di udara atau droplet dahak pasien. Apabila seseorang dinyatakan telah terinfeksi TBC, maka perlu diobati dengan mengonsumsi obat secara teratur dalam kurun waktu 6 bulan.
               <br/>
               <br/>

Lalu, bagaimana caranya agar kita sebagai orang yang sehat dapat terhindar dari penyakit Tuberkulosis (TBC)?


                </Typography>
                <Typography variant='body1' fontWeight={'550'} marginTop={'8px'}>
                    Terapkan Perilaku Hidup Bersih dan Sehat Untuk Pencegahan TBC
                </Typography>

                <Typography variant='body1' marginTop={'4px'}>
                TBC dapat dicegah dengan menerapkan Perilaku Hidup Bersih dan Sehat, seperti mencuci tangan dengan sabun, mengonsumsi makanan yang bergizi seimbang, olahraga secara rutin, memastikan rumah mendapat sinar matahari dan udara segar yang cukup dengan membuka pintu dan jendela setiap pagi agar sirkulasi udara terjaga dengan baik, menggunakan masker saat menjumpai orang dengan gejala TBC, serta menerapkan etika batuk yang benar.
                </Typography>
            </Box>
        

            </Container>
        </main>
        <Footer/>
        </DrawerAppBar>

    )
  }