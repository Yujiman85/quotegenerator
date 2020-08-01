const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

// Get Quote from API
async function getQuote() {
    const proxyUrl = 'https://intense-caverns-51299.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // Sets Author to 'Unknown' if author is blank
        if (data.quoteAuthor === '') {
            authorText.innerText = '-Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote();
    }
}

// On Load
getQuote();