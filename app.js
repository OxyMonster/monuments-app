const express  = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 

const port  = process.env.PORT || 8081; 



const server = app.listen(port, () => {

    console.log(`app is litening to port: ${port}`);
    
})
