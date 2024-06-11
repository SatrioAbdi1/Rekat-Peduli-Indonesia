export interface Post {
    id : string,
    title : string,
    author : string,
    category : string,
    createdAt : string,
    updatedAt : string,    
}

export interface User{
    id : string,
    name : string,
    email : string,
    password? : string,
    role : string,
    createdAt : string,
    updatedAt : string,
}