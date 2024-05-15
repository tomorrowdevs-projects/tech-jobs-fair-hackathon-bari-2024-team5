import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})


import cors from '@fastify/cors'


await fastify.register(cors, { 
  // put your options here
})

fastify.get('/', async () => {
    //return ('Benvenuto in Backend TJS Team5');
    return getTeam();
});

fastify.get('/api/', async () => {
    return {
        message: {
            Components: ['Angela', 'Chiara', 'Maria', 'Francesco'],
            github: 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/'

        }
    }
});


fastify.get('/api/credits', async () => {
    return {
        message: {
            Components: ['Angela', 'Chiara', 'Maria', 'Francesco'],
            github: 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/'

        }
    }
});


fastify.get('/api/players_pendings', async () => {
    return {
        status: 'ok'
    }
});

fastify.put('/api/players', async () => {
    return {
        status: 'ok add palyer'
    }
});


fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});
