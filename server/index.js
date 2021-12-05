require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

app.use(express.json())

const { PORT, CONNECTION_STRING } = process.env;

app.post('/api/tweets/', async (req, res) => {
    const db = app.get('db')
    const { tweets } = req.body
    console.log(req.body, tweets)

    const addTweet = await db.add_tweet([tweets])
    console.log(addTweet)

    const allTweets = await db.get_all_tweets([tweets])
    console.log(allTweets)

    res.status(200).send(allTweets)

    // res.status(200).send(addTweet)


})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
   }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
   }) 


app.listen(PORT, () => {
    console.log(`Take us to warp ${PORT}`)
})