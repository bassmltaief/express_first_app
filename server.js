const express = require('express'); 
const app = express();


const date= (req,res,next) => {
const datee= new Date();
const day=datee.getDay();
const hours=datee.getHours();
    ((day<5 && day>0) && (hours<18 && hours>=9))? 
    next(): res.send('we are closed')  
    }



app.use("/",date);
   

app.use(express.static("public"))

 

//start the server
const PORT=process.env.PORT || 5000;
app.listen(PORT, (err) => err ?
    console.error(err) :
    console.log('the server is runing...')
);