const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
const app = express();

app.use(cors());
var client = new Client();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/getLocation',(req,res) =>{
const bodyOfCity = req.body.City;
const key = "AIzaSyCecKcykrF0kBox13VmLwsEHauesxgU5Q4"
client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+bodyOfCity+"+top+Hotel&key="+key, function (data, response) {
   res.json({msg:true, data: data})
});

});

app.listen(3001,()=>{

    console.log("Listing post 3001");
})