const person = require('../models/person').person;

exports.index = async (_req, res, next) => {
    try{
        res.status(200).json(person);
    } catch (error) {
        next(error);
    }
}

exports.show = async (req, res, next) => {
    try{
       const _id = req.params.id;
       const p = await person.find(_p => _p.id === _id); 
        res.status(200).json(p);
    } catch (error) {
        next(error);
    }
}
