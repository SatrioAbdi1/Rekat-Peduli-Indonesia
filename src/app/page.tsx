"use client";
import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "@/components/Appbar/Appbar";

export default function Home() {
  return (
    <main className={styles.main}>
        <DrawerAppBar window={() => window}/>
    </main>
  );
}
