const jan16_2024 = new Date(2024, 0, 16);
const today = new Date();
const daysPassed = Math.floor((today - jan16_2024) / (1000 * 60 * 60 * 24));

const wordsFilePath = 'src/words.txt';

fetch(wordsFilePath)
    .then(response => response.text())
    .then(data => {
        const words = data.split('\n');
        const selectedWords = [];

        for (let i = 0; i < 3; i++) {
            const index = (daysPassed*3-3 + i) % words.length;
            selectedWords.push(words[index]);
        }

        const container = document.createElement('div');
        container.classList.add('container');

        const h1Elements = document.querySelectorAll('h1');
        h1Elements.forEach((h1, index) => {
            h1.textContent = selectedWords[index];
            container.appendChild(h1);
        });

        for (let i = h1Elements.length; i < 3; i++) {
            const h1 = document.createElement('h1');
            h1.textContent = selectedWords[i];
            container.appendChild(h1);
        }

        document.body.appendChild(container);
    })
    .catch(err => console.error(err));
