import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { User } from "./DTO/user";
import { registerUser } from "./helpers/registerUser";
import { UserLogin } from "./DTO/userLogin";
import { verifyLoginUser } from "./helpers/verifyLoginUser";
import { Machine } from "./DTO/machineDTO";
import { registerMachine } from "./helpers/registerMachine";
import { MachineUpdate } from "./DTO/machineUpdateDTO";
import { updateMachine } from "./helpers/updateMachine";
import { getAllMachines } from "./helpers/getAllMachines";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.post("/cadastro-usuario", async (req: FastifyRequest, res: FastifyReply) => {
        const body = req.body as User
        const response = await registerUser(body)
        res.send(response)
    
    })
    fastify.post("/login", async (req: FastifyRequest, res: FastifyReply) => {
       
        const body = req.body as UserLogin
        const response =  await verifyLoginUser(body)
        if(response === 'Usuario ou Senha errada'){
           return res.status(401).send(response)
        }
        console.log(response)
        res.send(response)
        
    })
    fastify.post("/cadastrar-maquina", async (req: FastifyRequest, res: FastifyReply) => {
        const body = req.body as Machine
        const response = await registerMachine(body)
        res.send(response?.name)
    }) 
    fastify.patch("/atualizar-maquina", async (req: FastifyRequest, res: FastifyReply) => {
        const body = req.body as MachineUpdate
        const response = await updateMachine(body)
        const obj =  { 
            message: 'Maquina atualizada com sucesso',
            descricao: response.update_description,
            responsavel: response.update_by
        }
        res.send(obj)
    }) 
      
    fastify.get("/listar-maquinas", async (req: FastifyRequest, res: FastifyReply) => {
        const response =  await getAllMachines()
        res.send(response)
        
    })
} 