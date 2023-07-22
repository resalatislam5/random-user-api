const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())



app.get('/',(req,res) => {
    res.send('Home page')
})

//No route found
app.all('*',(req,res) =>{
    res.send('route not found') 
})
// errorHandler
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
