"use server"

import { createUser } from "@/lib/services"
import { NeonDbError } from "@neondatabase/serverless"
import { redirect } from "next/navigation"

export const handleForm = async (_ : any,formData : FormData) => {
    "use server"

    const name = formData.get('name')?.toString() ?? ''
    const email = formData.get('email')?.toString() ?? ''
    const password_confirm = formData.get('password_confirm')?.toString() ?? ''
    const password = formData.get('password')?.toString() ?? ''
    const role = formData.get('role')?.toString() ?? ''   
    
    const formReturn = {
        name,
        email,
        password_confirm,
        password,
        role
    }

    if(name === "" || email === "" || password === "" || password_confirm === "" || role === ""){
        return{
            ...formReturn,
            message : "*Semua field harus diisi"
        }
    }

    if(password !== password_confirm){
        return{
            ...formReturn,
            message : ""
        }
    }

    try{
        await createUser(
            {
                name,
                email,
                password,
                role
            }
        )

        redirect('/admin/users')
    }catch(e :any) { 
        if(e instanceof NeonDbError){
            if(e.code === '23505'){
                return{
                    ...formReturn,
                    message : "*Email sudah terdaftar"
                }
            }        
        }   
        throw e
    }
}