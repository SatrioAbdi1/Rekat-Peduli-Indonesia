import Container from '@mui/material/Container';
import Image from 'next/image';


export const Footer = () => {
    return(
        <div style={{backgroundColor : '#F13C28',width : '100%'}}>
        <Container maxWidth="lg" style={{paddingRight : '128px', paddingLeft : '128px'}}>
            <div style={{display : 'flex', flexDirection : 'row'}}>
                <Image 
                    src={'/rekat.png'}
                    alt='logo rekat'
                    width={37}
                    height={37}
                />
            </div>
        </Container>
        </div>
    )
}