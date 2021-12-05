import { useState } from 'react';
import axios from 'axios';


export default function Tweets() {
    const [tweets, setTweets] = useState('')
    const [response, setResponse] = useState([])

    const handleClick = () => {
        axios.post('/api/tweets', { tweets: tweets } )
            .then(res => {
            setResponse(res.data)
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div>
            <input onChange={(e) => { setTweets(e.target.value) }}
                type='text'
            />
            <button onClick={handleClick}>Tweet</button>
        </div>
    )
}