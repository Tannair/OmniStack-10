const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    bio: String,
    techs: [String],
    avatar_url: String,
    github_username: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    } 
});


module.exports = mongoose.model('Dev', DevSchema);