const anamneseModel = require('../models/anamneseModel');
const { update } = require('../models/studentModel');


module.exports = {
    fetchAnamneseByID : (id, req, res) => {
        return anamneseModel.fetchAnamnese(id);
    },
    create : (anamnese, req, res) => {
        anamneseModel.create(anamnese);
    },
    update : (anamnese, req, res) => {
        anamneseModel.update(anamnese);
    },
    delete : (anamneseID, req, res) => {
        anamneseModel.delete(anamneseID);
    }
}