import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "@/components/Appbar/Appbar";
import Container from '@mui/material/Container'

export default async function Home() {
  return (
    <main className={styles.main}>
      <Container>
      <div>
        <Image src="/home-cover.png" alt="" fill/>
      </div>

      </Container>
    </main>
  );
}
