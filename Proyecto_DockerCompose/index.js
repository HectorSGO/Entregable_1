const { count } = require('console')
const express = require('express')
const { append } = require('express/lib/response')
const { createClient } = require('redis')
const app = express()
const client = createClient({
    url: 'redis://redis:6379'
});

client.on ('error', err => console.log('Redis Client Error', err));


async function increment(){
    let retries = 5
    while (true) {
        try {
            return await client.incr('hits')
        } catch (e) {
            if (retries === 0) {
                throw e
            }
            retries -= 1;
        }
    }
}

app.get ('/', async function (req, res) {
let count = await increment()
console.log(count);
res.send ('Hola Mundo.'+ count)
})
console.log('Listo');
app.listen(3000, async function(){
    await client.connect();
})