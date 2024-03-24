const express = require('express')
const router = express.Router()
const axios = require('axios').default;

// model emulating a word currently used within a question
// fullword: the original, unscrambled version of the word
// scrambledword: fullword scrambled into an array of chars
let WordModel = {
    fullWord: '',
    scrambledWord: '',
};

// Model emulating the user's score that is tallied up throughout one game.
// userScore: the score gained by user input, gaining 0-4 points per question.
// totalScore: the amount of questions the user has gone through, multiplied by four.
let ScoreModel = {
    userScore: 0,
    totalScore: 0,
};

// fetches a generated word from our random word API.
const getWordAPI = async (lowerBound) => {

    let response;
    try {
        response = await
            axios.get("https://parked.kintone.com/k/v1/record.json?app=1&id=1", {
                headers: {
                    'X-Cybozu-API-Token': 'ZS8cs3vOwf6Fxbes2OPdRMCZxDwHiB4drXve73fh'
                },
            });
    } catch (error) {
        console.error('Error fetching word: ', err);
    }

    return response.data;
}


// Default path that is not called in the frontend, but shows words that can be
// called from our API as mean of viewing our unscrambled API calls
router.get('/', async (req, res) => {
    const response = await getWordAPI(-1);
    res.send(response);
})

// helper function that 'scrambles' and returns a string
const scrambleWord = (word) => {
    // takes the string input and splits it into an array of chars
    const originalword = word.toString().split('');
    // new duplicate array
    scrambledword = Array.from(originalword);

    // While the new array is equal to the original array, scrambles the array.
    // This ensures that the scrambed array isn't coincidentally unchanged.
    while (JSON.stringify(scrambledword) == JSON.stringify(originalword)) {
        // Sorts the array of characters by a random integer, mixing up the placement
        scrambledword = scrambledword.sort(() => Math.random() - 0.5);
    }

    return scrambledword;
}

// Sends an array of chars that represents a scrambled word.
router.get('/scramble/', async (req, res) => {
    const lowerBound = Number(req.query.lowerbound);
    const response = await getWordAPI(lowerBound);
    WordModel.fullWord = response;
    WordModel.scrambledWord = scrambleWord(response);
    return res.status(200).send(WordModel.scrambledWord);
})

// gets the unscrambled version of the word/
// while /scramble both creates a word and returns its scramble, /unscramble simply
// returns a pre-existing unscamble of the word
router.get('/unscrambled/', async (req, res) => {
    try {
        return res.status(200).send(WordModel.fullWord);
    } catch (error) {
        return res.status(500).json({"error getting fullword: ": error});
    }
})

// Sends a boolean input that determines if a parameter input is a valid dictionary word.
// This is used to check if the user submission is a 'correct' word.
router.get('/isCorrect/', async (req, res) => {

    //word is fetched as a parameter from the url
    const wordInput = req.query.word;

    //fetches the data entry in a dictionary API for our given word
    fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + wordInput)
        .then(response => {
            // converts data to a readable .json
            return (response.json());
        }).then(data => {
            // this API is formatted so that a resolution is output only for non-existant entries.
            // If the data has a resolution, the word is not a valid entry in the dictionary.
            res.send(data.resolution ? false : true);
    }).catch(error => {
        console.error('Network error at isCorrect: ', error);
    });
})

// sends current user score
router.get('/userscore/', (req, res) => {
    try {
        res.status(200).send(ScoreModel.userScore.toString());
    } catch (error) {
        return res.status(500).json({"error getting userscore: ": error});
    }
})

// sends current total score
router.get('/totalscore/', (req, res) => {
    try {
        res.status(200).send(ScoreModel.totalScore.toString());
    } catch (error) {
        return res.status(500).json({"error getting totalscore: ": error});
    }
})

// increments userScore by the score the user from answering one question
router.get('/updateuserscore/', (req, res) => {
    const addedScore = Number(req.query.score);
    try {
        ScoreModel.userScore += addedScore;
        return res.send(200);
    } catch (error) {
        return res.status(500).json({"error updating userscore: ": error});
    }
})

// increments totalscore by four, reflecting a quesiton completed
router.get('/updatetotalscore/', (req, res) => {
    const addedScore = Number(req.query.score);
    try {
        ScoreModel.totalScore += 4;
        return res.send(200);
    } catch (error) {
        return res.status(500).json({"error updating totalscore: ": error});
    }
})

// resets the score model by setting both scores to 0
router.get('/resetgame/', (req, res) => {
    try {
        ScoreModel.userScore = 0;
        ScoreModel.totalScore = 0;
        return res.send(200);
    } catch (error) {
        return res.status(500).json({"error resetting scoremodel: ": error});
    }
})


module.exports = router