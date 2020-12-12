const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/about', function(request,response){
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function(request,response){
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', function(request,response){
    response.sendFile(__dirname + '/views/photogallery.html');
});

app.get('*', function(request,response){
    response.sendFile(__dirname + '/views/home.html');
});

app.listen(3000);