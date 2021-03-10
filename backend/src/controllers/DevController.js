const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require ('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {

    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res, next) {
        try {
    
            const { github_username, techs, latitude, longitude } = req.body;

            let dev = await Dev.findOne({ github_username });
            let message = "Usuário já cadastrado!";

            if (!dev) {
                const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
                let  { name = login, avatar_url, bio } = apiResponse.data;
        
                if (!name) {
                    name = apiResponse.data.login;
                }
        
                const location = {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                }
        
                const techsArray = parseStringAsArray(techs);
        
                dev = await Dev.create({
                    name,
                    bio,
                    techs: techsArray,
                    avatar_url,
                    github_username,
                    location
                });

                message = "Usuário cadastrado com sucesso!";
            }
        
            return res.json({message: message, dev: dev});
    
        } catch (err) {
            next(err);
            console.log(err);
            return false;
        }
    }
}