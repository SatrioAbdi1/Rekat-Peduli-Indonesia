"use server"
import { addPost, editPost } from "@/lib/services"
import { redirect } from "next/navigation"

export const handleForm = async (_ : any,formData : FormData, dataEditor: string, id: number,thumbnail: string ) => {
    const title = formData.get('title')?.toString() ?? ''
    const category = formData.get('category')?.toString() ?? ''
    // const thumbnail = formData.get('thumbnail')?.toString() ?? ''
    const editor = dataEditor

    const formReturn = {
        title,
        editor,
        category,
        thumbnail
    }
    
    if(title === "" || editor === "" || category === "" || thumbnail === ""){
        return{
            ...formReturn,
            message : "*Semua field harus diisi"
        }
    }


    try{
        await editPost(
            id,
            {
                thumbnail : thumbnail,
                title :title,
                author_id : 37,
                content : editor,
                category : category                
            }
        )

        redirect('/admin/posts')
    }catch(e :any) {
        throw e
    }        

 
}