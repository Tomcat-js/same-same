const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/show', (req, res) => {

    const imageList1 = ['car', 'dog', 'cake', 'house', 'bike', 'tree', 'ocean', 'bird', 'teeth', 'snake', 'ball', 'pants'];

    const imageList2 = ['shoes', 'umbrella', 'cactus', 'moon', 'helicopter', 'skateboard', 'horse', 'flower', 'apple', 'hand', 'guitar', 'window'];

    const imageList3 = ['speaker', 'TV', 'train', 'rocket', 'nose', 'shark', 'dinosaur', 'monster', 'chair', 'roller coaster', 'baby'];

    
    const firstRandomIndex = Math.floor(Math.random() * imageList1.length);
    const secondRandomIndex = Math.floor(Math.random() * imageList2.length);
    const thirdRandomIndex = Math.floor(Math.random() * imageList3.length);

    const searchQuery1 = imageList1[firstRandomIndex];
    const searchQuery2 = imageList2[secondRandomIndex];
    const searchQuery3 = imageList3[thirdRandomIndex];
    
    const API_KEY = 'DtAi5THcL2XoxpaSkcCQf16Id369rZ3q'
    let url1 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery1}`
    let url2 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery2}`
    let url3 = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchQuery3}`
    let loserUrl = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q='better luck next time'`

    const urlList = [url1, url2, url3];
    const randomUrl = Math.floor(Math.random() * urlList.length);

    const requestOne = axios.get(url1);
    const requestTwo = axios.get(url2);
    const requestThree = axios.get(url3);
    const requestFour = axios.get(urlList[randomUrl]);
    const loserRequest = axios.get(loserUrl);

    axios.all([requestOne, requestTwo, requestThree, requestFour, loserRequest]).then(axios.spread((...responses) => {

        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const responseFour = responses[3];
        const responseLoser = responses[4];

        const rndmImageIdx1 = Math.floor(Math.random() * responseOne.data.data.length)
        const rndmImageIdx2 = Math.floor(Math.random() * responseTwo.data.data.length)
        const rndmImageIdx3 = Math.floor(Math.random() * responseThree.data.data.length)
        const rndmImageIdx4 = Math.floor(Math.random() * responseFour.data.data.length)
        const rndmImageIdx5 = Math.floor(Math.random() * responseLoser.data.data.length)

        
        const queryArray = [searchQuery1, searchQuery2, searchQuery3]
        const matchingQuery = queryArray[randomUrl]
        
        res.render('show', {
            sticker1: responseOne.data.data[rndmImageIdx1].images,
            sticker2: responseTwo.data.data[rndmImageIdx2].images,
            sticker3: responseThree.data.data[rndmImageIdx3].images,
            sticker4: responseFour.data.data[rndmImageIdx4].images,
            searchQuery1: searchQuery1,
            searchQuery2: searchQuery2,
            searchQuery3: searchQuery3,
            matchingQuery: matchingQuery,
            responseLoser: responseLoser.data.data[rndmImageIdx5].images
        })     

      })).catch(errors => {
        // react on errors.
      })

})

app.listen(3000, () => {
    console.log('server running on port 3000')
})




