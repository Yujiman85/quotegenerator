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
        console.log(data);
    } catch (error) {
        getQuote();
        console.log('Oops! No Quote!', error.message);
    }
}

// On Load
getQuote();