const express=require('express')
const router= express.Router();
const MenuItem=require('./../models/menuItem');

router.post('/', async (req,res)=>{
    try{
      const data=req.data
      const newMenuItem=new MenuItem(data);
      const response= await newMenuItem.save();
      console.log('data saved');
      res.status(200).json(response);
    }
  
      catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    
      }
    
  })
  
  router.get('/', async (req,res)=>{
    try{
      const data= await MenuItem.find();
      console.log('data fetch');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
  })

  module.exports = router