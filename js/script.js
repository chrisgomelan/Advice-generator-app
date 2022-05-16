const apiUrl = 'https://api.adviceslip.com/advice'


const adviceNum =  document.querySelector('.adviceNumber')
const advice1 = document.querySelector('.advice')
const dice =  document.querySelector('.dice')

 
    dice.addEventListener('click', async () => {
        const response = await fetch(apiUrl);
        const json = await response.json();
        const { advice, id } = json.slip;
        adviceNum.textContent = id;
        advice1.textContent = advice;
      });   

