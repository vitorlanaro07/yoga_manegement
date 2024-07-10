const anamneseModel = require('../models/anamneseModel')


module.exports = {
    getAnamneseByID : (id, req, res) => {
        return anamneseModel.fetchAnamnese(id);
    }
}