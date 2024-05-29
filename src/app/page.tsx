import styles from "./page.module.css";
import DrawerAppBar from "@/components/Appbar/Appbar";
import Button from '@mui/material/Button';
import { Image } from "@/components/Image/Image";
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';

export default async function Home() {
  return (
    <main>
      <Container maxWidth="md">
      <div style={{display : 'flex'}}>
      <Image height="80%" width="100%"/>
      <div style={{position : 'absolute', bottom: '0', marginLeft : '20px'}}>
        <Typography variant="h5"  color="initial">90 persen Anggota Rekat adalah Penyintas TB Resisten Obat</Typography>
        <Typography variant="subtitle1" color="initial">90 persen Anggota Rekat adalah Penyintas TB Resisten Obat</Typography>
      <Button variant="contained">asdfasdf</Button>
      </div>

      </div>
      </Container>

    </main>
  );
}
