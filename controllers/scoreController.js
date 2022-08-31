const express = require('express');
const router = express.Router()
const Score= require('../models/score.js')

router.get('/',async(req,res)=>{
    console.log('before')
    let scores = await Score.find({});
    console.log('scores', scores);
    res.render('index', { scores });
    console.log('after')
});
 
//new
router.get('/new',(req,res)=>{
    res.render('new');
});

router.get('/scores',(req,res)=>{

    res.render('show')
});

router.get('/edit', (req,res)=>{
    res.render('edit')
});


router.get('/',(req,res)=> {
    res.render('show')
})


router.get('/:id', async (req,res)=>{
    const score = await Score.findById(req.params.id);
    res.render('show.ejs', {
        score: score,
    });
});

// create
router.post('/', (req,res)=>{
    Score.create(req.body, (error, createdScore)=>{
        if(error) {
            console.log('error', error);
            res.send(error);
        } else {
            res.redirect('/scores');
        }
    });
});

router.delete('/:id', (req,res)=> {
    Score.findByIdAndRemove(req.params.id, (err, data)=> {
        if(err) console.log(err)
        res.redirect('/scores')
    });
});

router.put('/:id', (req,res) => {
    Score.findByIdAndUpdate(req,params.id, req.body, {new: true}, (err, updatedModel) => {
        res.redirect('/scores')
    });
});


module.exports = router