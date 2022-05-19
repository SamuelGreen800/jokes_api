const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema (
    {      

        
        setup: {
            type: String,
            default: "Why did the chicken cross the road?"
        },

        punchline: {
            type: String,
            default: "Who knows. It's a chicken."
        },
},
    {timestamps: true}

);
    


const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
