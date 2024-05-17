import Fastify from 'fastify'
import cors from '@fastify/cors'
import { getRoutes } from './routes/Routes.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, { 
  // put your options here
})

getRoutes(fastify);


fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});






