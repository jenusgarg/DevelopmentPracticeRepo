const express= require("express");

const app = express();

// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }

let users=[
    {
        name:"John",
        kidneys:[{
            healthy:false
        }]
    }
];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const total_kidneys=johnKidneys.length;
    let healthy_kidneys=0;
    
    for(let i=0;i<total_kidneys;i++){
        if(johnKidneys[i].healthy){
                healthy_kidneys=healthy_kidneys+1;
        }
    }
    const unhealthy_kidneys=total_kidneys-healthy_kidneys;
    res.json({
        total_kidneys,
        healthy_kidneys,
        unhealthy_kidneys
    })
})


app.post("/",function(req,res){
    const new_hlth=req.body.isHeathy;
    users[0].kidneys.push({
        healthy:new_hlth
    })

    res.json(
        {
            msg:"done post"
        }
    )
})



app.put("/",function(req,res){
    
    const johnKidneys=users[0].kidneys;
    for(let i=0;i<johnKidneys.length;i++){
        johnKidneys[i].healthy=true;
    }
    res.json(
        {
            msg:"done put"
        }
    )
})


app.delete("/",function(req,res){
    
    const johnKidneys=users[0].kidneys;
    let a=[];
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy==true){
            a.push(johnKidneys[i]);
        }
    }
    users[0].kidneys=a;
    
    res.json(
        {
            msg:"done delete"
        }
    )
})




app.listen(3000);