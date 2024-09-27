const express = require('express')
const app = express()
const process = require('process')

const redis = require('redis')
const client = redis.createClient({
    host : 'redis-sever',
    port : 6379
})

client.set("visits", 0)

app.get('/', (req, res)=>{
    client.get("visits", (err,visits)=>{
        res.send('number of visits is ' + visits)
        client.set('visits', parseInt(visits)+1)
    })
})

app.get('/bad', (req, res)=>{
    process.exit(0)
})

app.listen(3000, (req, res)=>{
    console.log('listen on port 3000')
})