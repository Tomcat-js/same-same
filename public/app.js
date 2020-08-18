const imgOne = document.querySelector('.img_one');
const imgOneMoving = document.querySelector('.img_one_moving');
const imgTwo = document.querySelector('.img_two');
const imgTwoMoving = document.querySelector('.img_two_moving');
const imgThree = document.querySelector('.img_three');
const imgThreeMoving = document.querySelector('.img_three_moving');


imgOne.addEventListener('click', () => {
    imgOne.className = 'display_none';
    imgOneMoving.classList.remove('display_none');
}) 

imgTwo.addEventListener('click', () => {
    imgTwo.className = 'display_none';
    imgTwoMoving.classList.remove('display_none');
}) 

imgThree.addEventListener('click', () => {
    imgThree.className = 'display_none';
    imgThreeMoving.classList.remove('display_none');
}) 

