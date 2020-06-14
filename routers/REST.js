const express=require('express')
const router=express.Router()
const Entire = require('../models/ToDo')

router.get('/',async(req,res)=>{
    try{
        const List= await Entire.find()
        if(List.length == 0){
            res.status(404).json({Message:'No ToDo Lists'})
        }
        else{
        res.status(200).json(List)
        }
    }catch(err){
        res.status(404).send('It is a wrong url. try again')
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const List= await Entire.findById(req.params.id)
        if(List==null){
            res.status(404).json({Message:'No Particular ToDo List'})
        }
        else{
            res.status(200).json(List)
        }
    }catch(err){
        res.status(404).send('It is a wrong url. try again')
    }
})

router.post('/',async(req,res) => {

    const toDo = new Entire({
        Title: req.body.Title,
        ToDo: req.body.ToDo
    })

    try{
        const tD1= await toDo.save()
        res.status(201).json(tD1)
    }catch(err){
        res.status(404).send('Cannot create the toDo')
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const tD =await Entire.findById(req.params.id)
        if(tD==null){
            res.status(404).json({Message:'No Particular ToDo List'})
        }
        else{
            tD.ToDo=req.body.ToDo
            const tD1=await tD.save()
            res.status(200).json(tD1)
        }
    }catch(err){
        res.send('Check your url again')
    }
})

router.delete('/:id',async(req,res) => {
    try{
        const tD =await Entire.findById(req.params.id)
        if(tD==null){
            res.status(200).json({Message:'No Particular ToDo List'})
        }
        else{
            const tD1=await tD.remove()
            res.status(200).send('Deleted')
        }
    }catch(err){
        res.send('Cannot Delete. Something went wrong')
    }
})


module.exports=router