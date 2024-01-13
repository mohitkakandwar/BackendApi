const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   interest:[]
   
})

module.exports = mongoose.model('Data', dataSchema)


// post in this format :
// //{
//     "interest": [
//         "line1",
//         "line2",
//         "line3",
//     ]
// }
