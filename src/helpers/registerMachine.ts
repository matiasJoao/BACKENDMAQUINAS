import { PrismaClient } from "@prisma/client";
import { Machine } from "../DTO/machineDTO";

export const registerMachine = async (data: Machine) => {
    const db  = new PrismaClient()
    try{
        const res = await db.maquina.create({
            data : {
                name: data.name,
                serial: data.serial,
                update_at: '' ,
                update_by: '',
                update_description: ''                     
            }
        })
        return res
    }catch(err){
        throw new Error(`erro ao tentar crirar maquina ${err}`)
    }
}