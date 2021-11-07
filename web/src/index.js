const express = require('express');

const servidor = express();

servidor.get('/api', (req, res) =>{
    res.send('PARABÉNS! VOCÊ CHEGOU ATÉ AQUI!')
});

servidor.listen(3000)


