const dbConfig = require("../config/database")
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url: dbConfig.url,
    mahasiswa: require('./vehicle_model')(mongoose)
}