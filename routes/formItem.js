const router = require('express').Router();

const formItemsModel = require('../models/formItemsModel');

// Insert item
router.post('/app/event', async (req, res)=>{
    // console.log('hello');
    try{
        const newItem = new formItemsModel({
            event: req.body.event
        })
        // save
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    } catch (error) {
        res.json(error)
        
    }
})
router.get('/app/events',async ( req,res)=>{
    try {
        const newItem =await formItemsModel.find({});
        
        res.status(200).json(newItem);
    } catch (error) {
        res.json(error)
    }
})
router.put('/app/event/:id', async (req, res)=>{
    console.log(req.params.id);
    try {
        const updateItem = await formItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Update successfully");
    } catch (error) {
        res.json(error)
    }
})
router.delete('/app/event/:id', async (req,res)=>{
    console.log(req.params.id);
    
    try {
        const deleteItem = await formItemsModel.deleteOne({_id:req.params.id});
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;