const express=require('express')
const router=express.Router()
const Entire = require('../models/ToDo')

router.get('/',async(req,res)=>{

        const List= await Entire.find()
        if(List.length>0){
            res.status(200).json(List)
        }else{
            res.status(404).json({Message:'No ToDo Tasks!!'})
        }
})

router.get('/:id',async(req,res)=>{

        const list= await Entire.findById(req.params.id)
        if(list!=null){
        res.status(200).json(list)
        }
        else{
            res.status(404).json({Error:'No ToDo Found!!'})
        }
})

router.post('/',async(req,res) => {

    const toDo = new Entire({
        Title: req.body.Title,
        ToDo: req.body.ToDo
    })
        if(await toDo.save())
            res.status(201).json(t0Do)
        else
            res.status(404).send('Error')
})


router.patch('/:id',async(req,res) => {

        const tD =await Entire.findById(req.params.id)
        if(tD!=null){
        tD.ToDo=req.body.ToDo
        const tD1=await tD.save()
        res.json(tD1)
        }
    else{
        res.status(404).json({Message:'Error'})
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