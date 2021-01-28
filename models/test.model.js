const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Format the Schema
const testSchema = new Schema(
    {
        quote: { type: String, required: true, unique: true },
        author: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

const Test = mongoose.model('Test', testSchema); // capital letter is for MongoDB to create new collection

module.exports = Test; // export default Test
