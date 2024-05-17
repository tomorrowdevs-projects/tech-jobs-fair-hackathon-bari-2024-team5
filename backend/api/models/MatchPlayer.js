import mongoose from 'mongoose';

export const get_match_playerSchema = () => {
    const { Schema } = mongoose;

    const match_playerSchema = new Schema({
        id_match : {type: Number },
        mail : {type : String, required : true},
        answer_total : {type : Number, required : true},
        answer_correct : {type : Number, required : true},
        timesec_ex : {type : Number, required : true}
    });
    
    return match_playerSchema;
}

export default { get_match_playerSchema }