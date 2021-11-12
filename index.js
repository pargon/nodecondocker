// require('dotenv').config();

var express = require('express');
var app = express();
/*
var redis = require('redis');
const redisClient = redis.createClient({
  host: 'localhost', // process.env.REDIS_HOST,
  port: 6379, // process.env.REDIS_PORT
});*/

// console.log(`Using redis on port ${process.env.REDIS_PORT}`);

app.get('/', function(req, res) {
  console.log("New request GET to /");
  res.send('Hola Mundo!');
});

/*
app.get('/redis', async function(req, res) {
  console.log("New request GET to /redis");
  let redis_key_name = req.query.rk_name;
  
  console.log(`redis_key_name: ${redis_key_name}`);
  if (!redis_key_name){
    res.send("Variable 'rk_name' must be defined");
    return;
  }
  redisClient.get(redis_key_name, async (error, result) => {
    // Si hay error, lo devolvemos
    if (error) {
      console.log("redis error:", error);
      res.send("error");
      return;
    }
    // Si hay algún resultado, quiere decir que fue obtenido desde Redis
    // En este caso, lo devolvemos sin más
    console.log("redis result:", result);
    if (result) {
      res.send(result);
    } else {
      res.send(`No results for key name: ${redis_key_name}`);
    }
  });
});
*/


const port = 3000;

app.listen(port, function() {
  console.log(`Aplicación escuchando el puerto ${port}!`);
});