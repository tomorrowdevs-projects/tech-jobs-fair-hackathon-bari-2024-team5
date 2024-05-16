import Fastify from 'fastify'
import cors from '@fastify/cors'
import mongoose from 'mongoose'

const connString = "mongodb+srv://francescoricci:techjf@cluster0.3rl1hug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//const connString = 'mongodb://127.0.0.1:27017/quizdb'

const { Schema } = mongoose;

const match_playerSchema = new Schema({
    id_match : {type: Number },
    mail : {type : String, required : true},
    answer_total : {type : Number, required : true},
    answer_correct : {type : Number, required : true},
    timesec_ex : {type : Number, required : true}
});

const MatchPlayer = mongoose.model('match_playerTable' , match_playerSchema);

const fastify = Fastify({
  logger: true
})


await fastify.register(cors, { 
  // put your options here
})


const cn = await mongoose.connect(connString);

fastify.get('/', async () => {
    //return ('Benvenuto in Backend TJS Team5');
    return ('OK');
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


fastify.get('/api/players_pendings', async (request, reply) => {
    
    try {
        const matchplayers = await MatchPlayer.find();
        reply.code(200).send(matchplayers);
    } catch (error) {
        reply.code(500).send(error)
    }

});

fastify.post('/api/match_player', async (request, reply) => {
    
    //let result = {};

     try {
            
        // la crea ma non controlla se già presente
        const match_player = request.body;
            match_player['id_match'] = 1;
            const newMatch_player = await MatchPlayer.create(match_player);
            result = reply.code(201).send(newMatch_player);
            //console.log(result);
        } catch (error) {
            result = reply.code(500).send(error)
            console.log(result);
        }
    
    /*return { result } */
});


fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});
