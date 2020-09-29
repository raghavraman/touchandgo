var express = require('express')
  , router = express.Router()


router.get('/',function(req,res) {

    res.redirect('view')

});


router.get('/incoming',function(req,res){
    console.log('Got body:', req.body);
    const incominng_params = req.body;
    res.send(incominng_params);
    
});

router.get('/outgoing',function(req,res){
    res.send('We sent the outgoing messages')
});


router.get('/view',function(req,res){
    res.send('You can see all messages')
});

module.exports = router;

