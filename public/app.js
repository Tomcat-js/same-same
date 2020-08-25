const imgOne = document.querySelector('.img_one');
const imgOneMoving = document.querySelector('.img_one_moving');
const imgTwo = document.querySelector('.img_two');
const imgTwoMoving = document.querySelector('.img_two_moving');
const imgThree = document.querySelector('.img_three');
const imgThreeMoving = document.querySelector('.img_three_moving');
const imgFour = document.querySelector('.img_four');
const winnerTag = document.querySelector('.winner_tag');
const loserTag = document.querySelector('.loser_tag');
const main = document.querySelector('main');
const btn = document.querySelector('button');
const threePics = document.querySelector('.three_pics');
const onePicDiv = document.querySelector('.one_pic');
const loser = document.querySelector('.loser');



imgOne.addEventListener('click', () => {
    imgOne.className = 'display_none';
    imgOneMoving.classList.remove('display_none');
    imgFour.classList.remove('img_four');

    if (imgOneMoving.className.includes(imgFour.className)) {
        imgTwo.className = 'display_none';
        imgThree.className = 'display_none';
        threePics.className = 'winner_pic';
        winnerTag.classList.remove('display_none');
        btn.textContent = 'play again';

    } else {
        threePics.innerHTML = '';
        btn.textContent = 'play again';
        let loserText = document.createElement('h1');
        loserText.textContent = 'Sorry. Not a match.';
        threePics.className = 'loser_text';
        threePics.appendChild(loserText);
        imgFour.classList.add('display_none');
        loser.classList.remove('display_none');
        
    }

}) 

imgTwo.addEventListener('click', () => {
    imgTwo.className = 'display_none';
    imgTwoMoving.classList.remove('display_none');
    imgFour.classList.remove('img_four');

    if (imgTwoMoving.className.includes(imgFour.className)) {
        imgOne.className = 'display_none';
        imgThree.className = 'display_none';
        threePics.className = 'winner_pic';
        winnerTag.classList.remove('display_none');
        btn.textContent = 'play again';
    } else {
        threePics.innerHTML = '';
        btn.textContent = 'play again';
        let loserText = document.createElement('h1');
        loserText.textContent = 'Sorry. Not a match.';
        threePics.className = 'loser_text';
        threePics.appendChild(loserText);
        imgFour.classList.add('display_none');
        loser.classList.remove('display_none');

    }
}) 

imgThree.addEventListener('click', () => {
    imgThree.className = 'display_none';
    imgThreeMoving.classList.remove('display_none');
    imgFour.classList.remove('img_four');

    if (imgThreeMoving.className.includes(imgFour.className)) {
        imgOne.className = 'display_none';
        imgTwo.className = 'display_none';
        threePics.className = 'winner_pic';
        winnerTag.classList.remove('display_none');
        btn.textContent = 'play again';

    } else {
        threePics.innerHTML = '';
        btn.textContent = 'play again';
        let loserText = document.createElement('h1');
        loserText.textContent = 'Sorry. Not a match.';
        threePics.className = 'loser_text';
        threePics.appendChild(loserText);
        imgFour.classList.add('display_none');
        loser.classList.remove('display_none');
  
    }
}) 



