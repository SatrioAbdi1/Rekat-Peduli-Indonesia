import 'server-only';
import { pgTable, serial, varchar, date } from 'drizzle-orm/pg-core';
import { Post, User } from './interface';
import { db } from './drizzle.config';
import { tablePosts, tableUsers } from './DBmodel';
import { eq } from 'drizzle-orm';
import { hashPassword } from './authLogin';


export async function getUsers(): Promise<Partial<User>[]>{
    const data = await db.select().from(tableUsers).execute();
    return data.map((user) => {
        return {
            id : user.id ?? '-',
            name : user.name ?? '-',
            email : user.email ?? '-',
            role : user.role ?? '-',
        }
    })
}

export async function createUser(data : Partial<User>){
    await db.insert(tableUsers).values({
        name : data.name,
        email : data.email,
        password : data.password,
        role : data.role,
    }).execute();
}

export async function getUser(id : number): Promise<Partial<User>>{
    const data = await db.select().from(tableUsers).where(eq(tableUsers.id, id)).execute();
    return {
        id : data[0].id ?? '-',
        name : data[0].name ?? '-',
        email : data[0].email ?? '-',
        role : data[0].role ?? '-',
        password : data[0].password ?? '-',
    }
}

export const editUser = async (id : number, name : string, email : string, password: string,role : string) => {
    const hashedPassword = hashPassword(password)

    if(password === ''){
        await db.update(tableUsers).set({
            name,
            email,
            role
        }).where(eq(tableUsers.id, id)).execute()
    }else{
        await db.update(tableUsers).set({
            name,
            email,
            password : hashedPassword,
            role
          }).where(eq(tableUsers.id, id)).execute()
    }
}
  
export async function deleteUser(id : number){
    await db.delete(tableUsers).where(eq(tableUsers.id, id)).returning({
        deletedId : tableUsers.id
    })
}

export async function addPost(data : Partial<Post>){
    await db.insert(tablePosts).values({
        title : data.title,
        author_id : data.author_id,
        thumbnail : data.thumbnail,
        content : data.content,
        category : data.category,
        createdAt : new Date(),     
    }).execute();
}

export async function getPosts(): Promise<Partial<Post>[]>{
    const data = await db.select({
        id : tablePosts.id,
        title : tablePosts.title,
        author_id : tableUsers.name,
        content : tablePosts.content,
        category : tablePosts.category,
        createdAt : tablePosts.createdAt,
        updatedAt : tablePosts.updatedAt,
        thumbnail : tablePosts.thumbnail,
        name : tableUsers.name,
    }).from(tablePosts).leftJoin(tableUsers, eq(tableUsers.id, tablePosts.author_id)).execute();
    return data.map((post) => {
        return {
            id : post.id ?? '-',
            title : post.title ?? '-',
            author_id : post.author_id ?? '-',
            content : post.content ?? '-',
            category : post.category ?? '-',
            createdAt : post.createdAt ?? '-',
            updatedAt : post.updatedAt ?? '-',
            thumbnail : post.thumbnail ?? '-',
        }
    })
}

export async function getPost(id : number): Promise<Partial<Post>>{
    const data = await db.select().from(tablePosts).where(eq(tablePosts.id, id)).execute();
    return {
        id : data[0].id ?? '-',
        title : data[0].title ?? '-',
        author_id : data[0].author_id ?? '-',
        content : data[0].content ?? '-',
        category : data[0].category ?? '-',
        createdAt : data[0].createdAt ?? '-',
        updatedAt : data[0].updatedAt ?? '-',
        thumbnail : data[0].thumbnail ?? '-',
    }
}

export async function getPostByCategory(category : string): Promise<Partial<Post>>{
    const data = await db.select().from(tablePosts).where(eq(tablePosts.category, category)).execute();
    return {
        id : data[0].id ?? '-',
        title : data[0].title ?? '-',
        author_id : data[0].author_id ?? '-',
        content : data[0].content ?? '-',
        category : data[0].category ?? '-',
        createdAt : data[0].createdAt ?? '-',
        updatedAt : data[0].updatedAt ?? '-',
        thumbnail : data[0].thumbnail ?? '-',
    }
}

export async function editPost(id : number, data : Partial<Post>){
    await db.update(tablePosts).set({
        title : data.title,
        content : data.content,
        category : data.category,
        updatedAt : new Date(),
        thumbnail : data.thumbnail,
    }).where(eq(tablePosts.id, id)).execute()
}

export async function deletePost(id : number){
    await db.delete(tablePosts).where(eq(tablePosts.id, id)).returning({
        deletedId : tablePosts.id
    })
}