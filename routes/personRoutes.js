const express=require('express')
const router= express.Router();



const Person=require('./../models/person');
router.post('/',async (req,res)=>{
    try{
      const data=req.body //assuming  the request body contains the person data
  
      //create a new person document using the mongoose model
      const newPerson=new Person(data);
      //save the new person in the database
  
      const response =await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
  
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
    
    
    
  })
  //get method to get the person
  
  router.get('/', async (req,res)=>{
    try{
      const data= await Person.find();
      console.log('data fetch');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
  })
  
  router.get('/:workType',async (req,res)=>{
    try{
      const workType=req.params.workType; //extract the work type from the url parameters
      if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response= await Person.find({work:workType})
        console.log('data is fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'invalid work type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
  
  })

  router.put('/:id', async (req,res)=>{
    try{
        const personId=req.params.id //extract the id from the url parameter
        const updatedPersonData=req.body; //updated data for the person

        const response =await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, // Return the updated document
runValidators: true, // Run Mongoose validation

        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found'
            });
            }
            
        console.log('data updated');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    
      }
  })

  router.delete('/:id', async (req, res) => {
    try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    // Assuming you have a Person model
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
    return res.status(404).json({ error: 'Person not found' });
    }
    // Send a success message as a JSON response
    res.json({ message: 'Person deleted successfully' });
    } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    })
  

  module.exports = router