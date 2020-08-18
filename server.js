const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.send('Hello World')
})

// const sticker1 = () => {
//     return "TEST"
// }

app.get('/show', (req, res) => {

    const imageList = ['car', 'dog', 'cake', 'house', 'bike', 'tree', 'ocean', 'bird', 'teeth', 'snake', 'ball', 'pants', 'shoes', 'umbrella', 'cactus', 'moon', 'helicopter'];

    
    const firstRandomIndex = Math.floor(Math.random() * 4);
    const secondRandomIndex = Math.floor(Math.random() * 6 + 5);
    const thirdRandomIndex = Math.floor(Math.random() * 6 + 11);

    const searchQuery1 = imageList[firstRandomIndex];
    const searchQuery2 = imageList[secondRandomIndex];
    const searchQuery3 = imageList[thirdRandomIndex];
    
    const API_KEY = 'DtAi5THcL2XoxpaSkcCQf16Id369rZ3q'
    let url1 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery1}`
    let url2 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery2}`
    let url3 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery3}`
    
    const urlList = [url1, url2, url3];
    const randomUrl = Math.floor(Math.random() * urlList.length);

    const requestOne = axios.get(url1);
    const requestTwo = axios.get(url2);
    const requestThree = axios.get(url3);
    const requestFour = axios.get(urlList[randomUrl]);

    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {

        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const responseFour = responses[3];

        const rndmImageIdx1 = Math.floor(Math.random() * responseOne.data.data.length)
        const rndmImageIdx2 = Math.floor(Math.random() * responseTwo.data.data.length)
        const rndmImageIdx3 = Math.floor(Math.random() * responseThree.data.data.length)
        const rndmImageIdx4 = Math.floor(Math.random() * responseFour.data.data.length)

        
        const queryArray = [searchQuery1, searchQuery2, searchQuery3]
        const matchingQuery = queryArray[randomUrl]

        console.log(searchQuery1, searchQuery2, searchQuery3, matchingQuery)
        
        res.render('show', {
            sticker1: responseOne.data.data[rndmImageIdx1].images,
            sticker2: responseTwo.data.data[rndmImageIdx2].images,
            sticker3: responseThree.data.data[rndmImageIdx3].images,
            sticker4: responseFour.data.data[rndmImageIdx4].images,
            searchQuery1: searchQuery1,
            searchQuery2: searchQuery2,
            searchQuery3: searchQuery3,
            matchingQuery: matchingQuery
        })     

        
        // use/access the results 
      })).catch(errors => {
        // react on errors.
      })

})

app.listen(3000, () => {
    console.log('server running on port 3000')
})




