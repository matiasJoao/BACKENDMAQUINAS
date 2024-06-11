import { PrismaClient } from "@prisma/client"

export const getAllMachines = async () => {
    const db  = new PrismaClient()
    try {
        const res = await db.maquina.findMany()
        return res
    } catch (error) {
        throw new Error(`erro ao tentar Listar todas as maquinas ${error}`)
    }
}