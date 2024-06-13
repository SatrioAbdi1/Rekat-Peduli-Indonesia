export interface Post {
    id : number,
    title : string,
    author_id : number,
    content : string,
    thumbnail : string,
    category : string,
    createdAt : string | Date,
    updatedAt : string | Date,    
}

export interface User{
    id : number,
    name : string,
    email : string,
    password? : string,
    role : string,
}

export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    message: string;
}