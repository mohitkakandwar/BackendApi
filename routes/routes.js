const express = require('express');

const router = express.Router();

module.exports = router;


const Model = require('../models/model');



// get method



router.get('/getAlldata', async (req, res) => {
    try{
        const data = await Model.find();
        
        res.set('Access-Control-Allow-Origin', '*').json(data)
       
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

2
