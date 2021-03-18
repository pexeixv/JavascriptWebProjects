// Initialise variables
var quoteContainer = document.querySelector('.quote_container');
var quote = document.querySelector('#quote');
var author = document.querySelector('#author');
var twitter = document.querySelector('.twitter');
var newQuote = document.querySelector('#quote_new');
var loader = document.querySelector('.loader');

var showLoadingAnimation = flag => {
    if (flag) {
        loader.style.display = "flex";
        quoteContainer.style.display = "none";
    }
    else {
        loader.style.display = "none";
        quoteContainer.style.display = "flex";
    }
}


var i = 0;
// Get quote from API
var getQuoteFromAPI = async () => {
    var URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    var URL = 'https://api.quotable.io/random';
    try {
        showLoadingAnimation(true);
        var res = await fetch(URL);
        var data = await res.json();
        console.log(data);
        quote.innerText = data.content;
        if (data.content.length > 100)
            quote.classList.add('quote_text-long');
        else
            quote.classList.remove('quote_text-long');
        if (data.author)
            author.innerText = data.author;
        else
            author.innerText = 'Anonymous';
        showLoadingAnimation(false);

    } catch (error) {
        i++;
        if (i > 10) {
            quote.innerText = `We're sorry. API cannot be reached`;
            showLoadingAnimation(false)
            console.error(`We're sorry, quote not found - ${error}`);
        }
        else {
            getQuoteFromAPI();
        }
    }
}
getQuoteFromAPI();

var tweetQuoteInNewTab = () => {
    var quoteText = quote.innerText;
    var authorText = author.innerText;
    var twitterBaseUrl = `https://twitter.com/intent/tweet?text=`;
    var twitterUrl = `${twitterBaseUrl}"${quoteText}" - ${authorText}`;
    console.log(twitterUrl);
    window.open(twitterUrl, '_blank');
}

twitter.addEventListener('click', tweetQuoteInNewTab);
newQuote.addEventListener('click', getQuoteFromAPI);

