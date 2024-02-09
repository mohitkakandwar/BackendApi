const express = require('express');

const router = express.Router();

module.exports = router;


const Model = require('../models/model');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        interest: req.body.interest,
      
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

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