import bcrypt from 'bcrypt';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


export const hashPassword = (password : string) => {
    return bcrypt.hashSync(password, salt)
}  

export const comparePassword = (plainPassword: string, hashedPassword: string | null) =>  {
    
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

