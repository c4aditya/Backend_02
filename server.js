const express = require("express");
const app = express();
// jo bhi postman me likha hua hau usko lene ke liye yek middile ware ki jarurat hoti hai 
// jo ki yhaa .use hai 
app.use(express.json())

app.listen(4000  , ()=>{
    console.log("your server is 40000")
})

// isme simpley work iska ye hai ki manai jo car ka name likha hai vo postman me ---HTTP---->
// ---->POST -----> BODY---->json formate me likha hua hai to mai ussee le rha hu
// app.use(express.json()) iss middle ware ke help se 

app.post('/name' , (req ,res)=>{

    //ye  reqest ki body yani HTTP-->POST--->BODY--->joson data hai usko le rha hu aur 
    //name aur price naam ke variable me store kraa rha hu 
    const {name , price} = req.body
    // jb mai vhaa se SEND pe click krunga to vo data parsing hone ke baad const {name , price}
    // isme ake store ho jayegi 
    console.log(name)
    console.log(price)
    // ye responce seand hoo rha hai POST man pe jb koye bhi error nhi ayega data behjne me to us 
    // time yha se responce jayevga ye   res.send("this is working "); nhi to postman me error show 
    // krega aur data parse nhi hoga 
        res.send("this is working ");
    
})

app.get('/', (req , res)=>{
    res.send("the response is")
})
