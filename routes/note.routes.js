const express = require("express");
const { Notemodel } = require("../models/note.model");


const noteRouter = express.Router();

// noteRouter.get(`/`, (req, res) =>{
//     res.send("user Welcome")
// }); 

noteRouter.get(`/`, async(req, res) =>{
    try{
       
        const notes = await Notemodel.find();
        res.send(notes);
 

    }
    catch(err){
        res.status(500).send({Error: "Something went wrong"})
    }
   
}); 

noteRouter.post(`/create`, async(req, res) =>{
    try{
       const{title, category, userID} = req.body;
        const notes = new Notemodel({title, category,userID});
        await notes.save();
        res.send("Notes Created");
 

    }
    catch(err){
        res.status(500).send({Error: "Something went wrong"})
    }
   
}); 
noteRouter.patch(`/update/:id`, async (req, res) =>{
    try{

        const data =  req.body;
        const id = req.params.id;
        const note = await Notemodel.findByIdAndUpdate({_id:id});
        res.send("Updated")
        }
       
    
    
    catch(err){
        res.send("Update Failed")

    }
}); 

noteRouter.delete(`/delete`, async(req, res) =>{

    try {
        
    } 
    catch (error) {
        res.status(400).send("Login Failed")
        
    }
});
 



module.exports={noteRouter};
