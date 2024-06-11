import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

const start = async () => {

    await app.register(cors);
    await app.register(routes);
    const port = process.env.PORT || 4000;

    try {
        await app.listen(port, '0.0.0.0')
    } catch (err) {
        process.exit(1)
    }
}

start();