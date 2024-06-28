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

    const content = `<h3>Pendahuluan</h3><p>Tuberkulosis (TBC) adalah penyakit menular yang disebabkan oleh bakteri <i>Mycobacterium tuberculosis</i>. Penyakit ini terutama menyerang paru-paru, namun dapat juga mempengaruhi bagian tubuh lainnya. TBC adalah salah satu penyakit paling mematikan di dunia, tetapi dapat disembuhkan dengan pengobatan yang tepat. Artikel ini akan membahas cara-cara efektif dalam menyembuhkan TBC, baik melalui pendekatan medis maupun alami.</p><h3>Pendekatan Medis dalam Menyembuhkan TBC</h3><h4>1. Pengobatan Antibiotik</h4><p>Pengobatan utama untuk TBC adalah penggunaan antibiotik dalam jangka waktu yang panjang, biasanya selama 6 hingga 9 bulan. Beberapa obat yang sering digunakan adalah:</p><ol><li><strong>Isoniazid</strong></li><li><strong>Rifampisin</strong></li><li><strong>Etambutol</strong></li><li><strong>Pirazinamid</strong></li></ol><h4>2. Pengawasan Pengobatan</h4><p>&nbsp;</p><figure><img  src="https://api.rekat4indonesia.com/uploads/upload-1719191801317.jpg" width="3181" height="2123"></figure><p>Pengobatan TBC harus dilakukan di bawah pengawasan tenaga medis untuk memastikan kepatuhan pasien dalam mengonsumsi obat. Pengawasan langsung membantu mencegah resistensi obat dan memastikan keberhasilan pengobatan.</p><h4>3. Pengobatan TBC Multidrug-Resistant (MDR-TB)</h4><p>Untuk kasus TBC yang resisten terhadap obat standar, digunakan regimen pengobatan khusus dengan kombinasi obat yang lebih kuat dan dalam jangka waktu lebih lama, seringkali hingga 20 bulan.</p><h3>Pendekatan Alami dalam Mendukung Pengobatan TBC</h3><h4>1. Meningkatkan Sistem Kekebalan Tubuh</h4><p>Mengonsumsi makanan bergizi tinggi yang kaya akan vitamin dan mineral dapat membantu meningkatkan sistem kekebalan tubuh. Beberapa makanan yang direkomendasikan adalah:</p><ul><li>Buah dan sayuran segar, seperti jeruk, apel, dan brokoli.</li><li>Sumber protein seperti daging tanpa lemak, ikan, dan kacang-kacangan.</li><li>Makanan kaya zat besi seperti bayam dan hati.</li></ul><h4>2. Penggunaan Herbal dan Suplemen</h4><p>Beberapa herbal dan suplemen dapat membantu meningkatkan daya tahan tubuh dan mengurangi gejala TBC, seperti:</p><ul><li><strong>Kunyit</strong>: Mengandung kurkumin yang memiliki sifat anti-inflamasi.</li><li><strong>Bawang Putih</strong>: Memiliki sifat antibakteri dan antivirus.</li><li><strong>Echinacea</strong>: Dikenal untuk meningkatkan sistem kekebalan tubuh.</li></ul><h4>3. Gaya Hidup Sehat</h4><p>Mengadopsi gaya hidup sehat juga penting dalam proses penyembuhan TBC. Beberapa langkah yang dapat diambil meliputi:</p><ul><li>Beristirahat yang cukup untuk membantu tubuh pulih.</li><li>Menghindari merokok dan konsumsi alkohol.</li><li>Melakukan olahraga ringan sesuai anjuran dokter untuk menjaga kebugaran tubuh.</li></ul><h3>Kesimpulan</h3><p>Menyembuhkan TBC memerlukan kombinasi pengobatan medis yang tepat dan dukungan dari gaya hidup sehat serta nutrisi yang baik. Meskipun pengobatan utama TBC adalah melalui antibiotik, pendekatan alami seperti makanan bergizi dan herbal dapat mendukung proses penyembuhan. Penting untuk selalu mengikuti anjuran dan pengawasan tenaga medis dalam pengobatan TBC untuk memastikan keberhasilan terapi dan mencegah resistensi obat. Dengan penanganan yang tepat, TBC dapat disembuhkan dan pasien dapat kembali menjalani hidup sehat.</p>`
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