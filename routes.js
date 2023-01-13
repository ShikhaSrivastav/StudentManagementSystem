const express= require("express");
const mongoose=require("mongoose");
// const { routes } = require("../../../anime/animesolutions/animewebservice/app");
var schema=mongoose.Schema;
var router=express.Router();

var registerschema=new schema({
    prn:String,
pwd:String,
confirmpwd:String

})

var studentschema = new schema({
    rollno:String,
studname:String,
course:String,
DOA:String,
marks:String,
phnno:String

})
var Register = mongoose.model('StudentRegister',registerschema,'StudentRegister');
var Student = mongoose.model('StudentDetails',studentschema,'StudentDetails');

router.get("/register",function(req,resp){
    Register.find().exec(function(err,result){
        if(err){
            console.log("data not found");
            console.log(err);
            resp.status(500).send("no data found")

        }
        else{
            resp.send(result);
        }
    })
});
router.get("/details",function(req,resp){
    Student.find().exec(function(err,result){
        if(err){
            console.log("data not found");
            console.log(err);
            resp.status(500).send("no data found")

        }
        else{
            resp.send(result);
        }
    })
});
router.post("/register",function(req,resp){
    var registerob= new Register({prn:req.body.prn,pwd:req.body.pwd,confirmpwd:req.body.confirmpwd});
    registerob.save(function(err,result){
        if(err){
            resp.status(500).send("data not added");
        }
        else{
            resp.send(result);
        }
    })

});
router.post("/details",function(req,resp){
    var studentob= new Student({rollno:req.body.rollno,studname:req.body.studname,course:req.body.course,DOA:req.body.DOA,marks:req.body.marks,phnno:req.body.phnno});
    studentob.save(function(err,result){
        if(err){
            resp.status(500).send("data not added");
        }
        else{
            resp.send(result);
        }
    })

});
router.put("/update/:rollno",function(req,resp){
    Student.findOne({rollno:req.params.rollno},function(err,result){
        if(err){
            resp.status(500).send("data can not be found")
        }
        else{
            result.rollno=req.body.rollno;
            result.studname=req.body.studname;
            result.course=req.body.course;
            result.DOA=req.body.DOA;
            result.marks=req.body.marks;
            result.phnno=req.body.phnno;
            result.save(function(err,doc){
                if(err){
                    resp.status(500).send("data can not be updated")
                }
                else{
                    resp.status(200).send("data updated successfully")
                }
            })
        }
    })
})
router.delete("/delete/:rollno",function(req,resp){
    Student.remove({rollno:req.params.rollno},function(err,result){
        if(err){
            resp.status(500).send("data can not be deleted")
        }
        else{
            resp.status(200).send("data deleted successfully");
        }
    })
})
module.exports=router;