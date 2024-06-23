'use server'

import { ApiResponse, User } from "@/lib/interface";
import {  signIn } from "@/lib/auth";
import { redirect } from 'next/navigation'
import { createUser } from "@/lib/services";

export const handleFormLogin = async (formState: any, formData : FormData) => {


    const response : ApiResponse<User> = await fetch(`${process.env.URL}/login/api`,{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'            },
        body : JSON.stringify({email: formData.get('email'), password: formData.get('password')})            
      }).then((res) => res.json()).then((res) => {return res})
      
    
      if(response.success === true){
        await signIn('credentials', {email : formData.get('email'), password : formData.get('password')})
        redirect('/pasien')
      }


      return {
        email : formData.get('email'),
        password : formData.get('password'),
        message : response.message
      }
    
    }




