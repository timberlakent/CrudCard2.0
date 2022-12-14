const dotenv = require('dotenv');
const express = require('express');
const app = express();
const Score = require('./models/score.js')
const bodyparser = require("body-parser")
const methodOverride = require('method-override');





dotenv.config({path: '.env'})
const PORT = process.env.PORT || 8080

//body parser
app.use(bodyparser.urlencoded({extended:  true}))

//set view engine
app.set("view engine", "ejs")


const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))



const scoreController = require('./controllers/scoreController');
app.use('/scores', scoreController)

 app.get('/',(req,res)=>{
    res.render('new')
 })

app.get('/edit',(req,res)=>{
    res.render('edit')
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});