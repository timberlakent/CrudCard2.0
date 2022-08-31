const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: {type: String},
    score: {type: String}
});

const Score = mongoose.model('Score', scoreSchema);

module.exports= Score;