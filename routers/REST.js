const express=require('express')
const router=express.Router()
const Entire = require('../models/ToDo')

router.get('/',async(req,res)=>{
    try{
        const List= await Entire.find()
        if(List.length==0){
            res.status(404).send(null,'No ToDo Lists are there right now!!')
        }else{
        res.status(200).json(List)
        }
    }catch(err){
        res.status(500).send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const list= await Entire.findById(req.params.id)
        res.status(200).json(list)
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