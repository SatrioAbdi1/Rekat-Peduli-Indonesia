import {  loginUser } from "@/lib/services"

export async function POST(request: Request){
    const formData = await request.json()

    const res =await loginUser(formData.email || '', formData.password || '')
    return Response.json(res)
}

