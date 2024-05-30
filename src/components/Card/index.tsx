"use client"
import MuiCard from '@mui/material/Card';
import Image from 'next/image';
import Typography from '@mui/material/Typography'


export const ElevatedCard = () => {
    return(
        <MuiCard onClick={() => {}}  variant='elevation' style={{width : "300px", height : 'auto', cursor :'pointer'}}>
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
        </MuiCard>
    )
}