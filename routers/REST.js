const express=require('express')
const router=express.Router()
const Entire = require('../models/ToDo')

router.get('/',async(req,res)=>{
    try{
        const List= await Entire.find()
        if(List.length>0){
            console.log('ToDo Lists')
            res.status(200).json(List)
        }else{
            res.status(404).json({Message:'No ToDo Tasks!!'})
        }
    }catch(err){
        res.send('Fuck')
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const list= await Entire.findById(req.params.id)
        if(list!=null){
        res.status(200).json(list)
        }
        else{
            res.status(404).json({Error:'No ToDo Found!!'})
        }
    }catch(err){
        res.status(500).send('Error'+err)
    }
})

router.post('/',async(req,res) => {

    const toDo = new Entire({
        Title: req.body.Title,
        ToDo: req.body.ToDo
    })

    try{
        const tD1= await toDo.save()
        res.json(tD1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const tD =await Entire.findById(req.params.id)
        tD.ToDo=req.body.ToDo
        const tD1=await tD.save()
        res.json(tD1)
    }catch(err){
        res.send('Error'+err)
    }
})

router.delete('/:id',async(req,res) => {
    try{
        const tD =await Entire.findById(req.params.id)
        const tD1=await tD.remove()
        res.send('Deleted')
    }catch(err){
        res.send('Error'+err)
    }
})


module.exports=router