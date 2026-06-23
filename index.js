 HEAD
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello');
});

app.listen(3001);

/* Serviço web com o framework Express.js
*  
* Deve servir opcoes para requisições da Musica e partes dela.

**/


// GET musica/letra

// Get musica/parte/:id

const express = require('express');
const app = express();

app.get('/', function (req,res){

    const html = "<html> <body> <b>Hello Turma de Terça!!</b> </body>  </html>";
    res.contentType('text/html');
    res.send(html);
});

app.listen(3001);


cd3db3b6e271c6140b43e2fc8cdf53201d913fad
