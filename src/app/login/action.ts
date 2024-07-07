'use server'
import {  signIn } from "@/lib/auth";
import { loginUser } from "@/lib/services";

export const handleFormLogin = async (email: string, password: string) => {
  try{
    const res =await loginUser(email, password)
    if(res.success === true){
      await signIn('credentials', {email : email, password: password, id: res.data?.id, name : res.data?.nama})
      return {
        success: true,
        message : res.message
      }
    }else{
      return {
        success: false,
        message : res.message
      }
    }
  }catch(e){
    throw e    
  }     
    
}







