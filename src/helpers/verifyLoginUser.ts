import { PrismaClient } from "@prisma/client";
import { UserLogin } from "../DTO/userLogin";

export const verifyLoginUser = async (user: UserLogin) => {
    const db  = new PrismaClient()
    try {
        const res = await  db.usuario.findUnique({
            where: {number_register: user.numberRegister  }
        })
       if(res?.password != user.password){
        return 'Usuario ou Senha errada'
       }
       return res
    } catch (error) {
        throw new Error(`erro ao tentar conectar ${error}`)
}}