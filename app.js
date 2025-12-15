echo "const axios = require('axios');

setTimeout(() => {
    console.log('Привет! Это сообщение через 2 секунды');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
    console.log('Это сообщение каждые 3 секунды');
    count++;
    if (count === 3) {
        clearInterval(intervalId);
    }
}, 3000);

async function getRandomMeme() {
    try {
        const response = await axios.get('https://www.reddit.com/r/memes/random/.json');
        const meme = response.data[0].data.children[0].data;
        console.log('\\nСлучайный мем:');
        console.log('Название:', meme.title);
        console.log('Ссылка на картинку:', meme.url);
    } catch (error) {
        console.error('Ошибка при получении мемов:', error);
    }
}

getRandomMeme();" > app.js
