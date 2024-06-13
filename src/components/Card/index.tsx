"use client"
import MuiCard from '@mui/material/Card';
import Image from 'next/image';
import Typography from '@mui/material/Typography'
import Link from 'next/link';
import { Post } from '@/lib/interface';

interface CardProps {
    data : Partial<Post>

}

export const ElevatedCard = ({data} : CardProps) => {
    return(
        <MuiCard  variant='elevation' style={{width : "300px", height : 'auto', cursor :'pointer'}}>
            <Link href={`/blog/${data.title}?id=${data.id}`}>
            <div style={{ margin : 16 }}>
            
            <Image
                alt='Mountains'
                src={data.thumbnail}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '269px', height: '185px', borderRadius : 6,}}
            />
            <Typography  variant="subtitle2"  marginTop={'4px'}  color="#F13C28" fontWeight={500} component="div" >
            {data.category}
                </Typography>

                <Typography  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }} variant="body1" marginTop={'4px'}  fontWeight={550} component="div">
                {data.title}

                </Typography>
            </div>
            </Link>
        </MuiCard>
    )
}