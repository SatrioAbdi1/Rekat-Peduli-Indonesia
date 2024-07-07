"use server"
import { auth, signIn, signOut } from '@/lib/auth';
import { Button } from '../Button';


export async function ButtonLogout(){
    return(
        <form action={async() => {
            'use server';
            await signOut({ redirectTo: '/login',redirect: true});
        }}>
            <Button type="submit" sx={{margin : '14px'}} variant='outlined'>Log Out</Button>
        </form>
    )
}