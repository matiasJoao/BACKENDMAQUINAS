import { PrismaClient } from "@prisma/client";
import { User } from "../DTO/user";

export const registerUser =  async (user: User) => {
    const db  = new PrismaClient()
    const number = Math.floor(Math.random() * 85)
    const mixed = `${number}${user.name}` 
    try{
        const res = await db.usuario.create({
            data : {
                name : user.name,
                password: user.password,
                number_register: mixed                        
            }
        })
        const respnse = { 
            login: res.number_register
        }
        return respnse
    }catch(err){
        throw new Error(`erro ao tentar crirar ussuario ${err}`)
    }
   

}