const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',function(req,res){
    res.send({status:"Server is running,homepath hit"});
});
app.post('/add',function(req,res){
    let value1=req.body.num1;
    let value2=req.body.num2;
    let result=Number(value1)+Number(value2);
    res.send(
        {
            status:"success",
            result:result
        } 
        );
    }
);
app.get('/subtract/:value1/:value2',function(req,res){
    let value1=req.params.value1;
    let value2=req.params.value2;
    let result=Number(value1)-Number(value2);
    res.send(
        {
status:"success",
            result:result
        }
    );
});

    

app.listen(3737,function(){
console.log("Server is running on port 3737");
console.log("http://localhost:3737");
});