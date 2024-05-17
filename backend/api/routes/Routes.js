import mongoose from 'mongoose'
import { get_match_playerSchema } from '../models/MatchPlayer.js'
import { myfunzione } from "../controllers/controllers.js";


//const connString = "mongodb+srv://francescoricci:techjf@cluster0.3rl1hug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connString = 'mongodb://127.0.0.1:27017/quizdb'

const MatchPlayer = mongoose.model('match_playerTable' , get_match_playerSchema());
const cn = await mongoose.connect(connString);


async function loadQuestionTribia() {
    // all category
    // const APIUrl = 'https://opentdb.com/api.php?amount=1'
    // only category computer science 18
    const APIUrl = 'https://opentdb.com/api.php?amount=10&category=18'
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();

    // data contains response_code to value 0
    // data contains results array (length by amount parameter value)

    for (const iterator of data.results) {
        delete iterator.correct_answer;
        delete iterator.incorrect_answers;
        console.log(iterator); 
    }

    return data;
    
}

export const getRoutes = (fastify) => {

    //console.log('sono le rotte');

    
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

fastify.get('/api/trivia_answer', async (request, reply) => {
    
    try {
        const tribiajson = await loadQuestionTribia();
        reply.code(200).send(tribiajson);
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

} 

export default { getRoutes }



