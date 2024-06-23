import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { iApiResponse, iUser } from './Intreface';
import { redirect } from 'next/navigation';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  trustHost : true,
  pages : {
    signIn : '/login',
  },
  providers : [
    CredentialsProvider({
      authorize : async (credentials : Partial<{email : string, password : string}>) => {
        const email = credentials.email || ''
        const password = credentials.password || ''

        if(email.length > 0 ){
          return {email : email, password : password}
        }else{
          return {}
        }
      }   
    }, 
  )
  ],
  secret : "w5Lk6GGKiBM8Q8T9wTdQmNMvZrQkG7lKXyZJuDxmAM8=",
  callbacks : {
    authorized({auth, request : { nextUrl }}) {
      const isLoggedIn = !!auth?.user?.email
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      const isOnLogin = nextUrl.pathname.startsWith('/login')



      if(isLoggedIn && isOnLogin) {
        return Response.redirect(new URL('/admin/posts', nextUrl))
      }
      

      if(!isLoggedIn &&(isOnAdmin)){
        return Response.redirect(new URL('/login', nextUrl))

      }

      return true      

    }
}})
