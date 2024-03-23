const express = require('express')
const router = express.Router()
const axios = require('axios').default;

const token = "xDpFG5Zf9NbPkgLiGczHIxwTcyLjus7LfkKUzZ80"

const getbookings = async (lowerBound) => {
    let response;
    try {
        response = await
            axios.get("https://random-word-api.vercel.app/api?&length=" + randomIndex);
    } catch (error) {
        console.error('Error fetching word: ', err);
    }

    return response.data;
}