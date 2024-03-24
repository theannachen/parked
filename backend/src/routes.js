const express = require('express')
const router = express.Router()
const axios = require('axios').default;

// fetches a generated word from our random word API.
const getAllBookings = async () => {
    let response;
    try {
        response = await
            axios.get("https://parked.kintone.com/k/v1/records.json?app=1", {
                headers: {
                    'X-Cybozu-API-Token': 'ZS8cs3vOwf6Fxbes2OPdRMCZxDwHiB4drXve73fh'
                },
            });
    } catch (error) {
        console.error('Error fetching word: ', err);
    }

    return response.data.records;
}

const getAllFields = async () => {
    let response;
    try {
        response = await
            axios.get("https://parked.kintone.com/k/v1/app/form/fields.json?app=1&id=", {
                headers: {
                    'X-Cybozu-API-Token': 'ZS8cs3vOwf6Fxbes2OPdRMCZxDwHiB4drXve73fh'
                },
            });
    } catch (error) {
        console.error('Error fetching word: ', err);
    }
    return response.data.properties
}


// Default path that is not called in the frontend, but shows words that can be
// called from our API as mean of viewing our unscrambled API calls
router.get('/', async (req, res) => {
    const response = await getAllBookings();
    res.send(response);
})


// Sends an array of chars that represents a scrambled word.
router.get('/fields/', async (req, res) => {
    const response = await getAllFields();
    res.send(response);
})


module.exports = router