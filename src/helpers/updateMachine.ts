import { PrismaClient } from "@prisma/client"
import { MachineUpdate } from "../DTO/machineUpdateDTO"

export const updateMachine = async (data: MachineUpdate) => {
    const db  = new PrismaClient()
    try{
        const res = await  db.maquina.findUnique({
            where: {serial: data.serial}
        })
        const calendar: Date =  new Date()
        const day = `${calendar.getDay()}/${calendar.getMonth()}/${calendar.getFullYear()} em ${calendar.getHours()}Hrs:${calendar.getMinutes()}Min:${calendar.getSeconds()}Sec`
        const updateMachine = await db.maquina.update({
            where: {id: res?.id},
            data: {
                name: res?.name || '',
                serial: res?.serial || data.serial,
                update_description: data.description,
                update_at: day,
                update_by: data.UpdateBy
            }
        })
        return updateMachine
    }catch(err){
        throw new Error(`erro ao tentar Atualizar maquina ${err}`)
    }
}