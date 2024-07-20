const { httpError } = require("../helpers/handleError")
const userModel = require('../models/users')

const getItems = async (req,res) => {
    try {
        const listAll = await userModel.find({})
        res.send({data: listAll})
    } catch (error) {
        httpError(res, error)
    }
}

const getItem = (req,res) => {

}

const createItems = async (req,res) => {
    try {
        const {name,age,email} = req.body
        const restDetail = await userModel.create({
            name,age,email
        })
        res.send({data: restDetail})
    } catch (error) {
        httpError(res, error)
    }
}

const updateitems = (req,res) => {

}

const deleteItems = (req,res) => {

}

module.exports = {getItems, getItem,createItems,updateitems,deleteItems}