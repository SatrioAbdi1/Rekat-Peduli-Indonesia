"use client"
import MuiCard from '@mui/material/Card';
import Image from 'next/image';
import Typography from '@mui/material/Typography'
import Link from 'next/link';

interface CardProps {
    title? : string | undefined;
    description? : string | undefined;
    image? : string | undefined;
    key: number | undefined;

}

export const ElevatedCard = (props : CardProps) => {
    return(
        <MuiCard  key={props.key}  variant='elevation' style={{width : "300px", height : 'auto', cursor :'pointer'}}>
            <Link href="/blog/tahukah-kamu-pencegahan-tbc-dapat-dimulai-dari-diri-sendiri?">
            <div style={{ margin : 16 }}>
            <Image
                alt='Mountains'
                src='/home-cover.png'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '269px', height: '185px', borderRadius : 6,}}
            />
            <Typography  variant="subtitle2"  marginTop={'4px'}  color="#F13C28" fontWeight={500} component="div" >
            Dampak Kami
                </Typography>

                <Typography  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }} variant="body1" marginTop={'4px'}  fontWeight={550} component="div">
                Podcast Waras Kabeh Ep 11: TBC di Ujung Jari: Pembahasan Aplikasi Lapor TBC

                </Typography>
            </div>
            </Link>
        </MuiCard>
    )
}