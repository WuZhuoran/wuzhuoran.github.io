var FAV_QUOTES_LIST = [
    'Computer do not solve problems, they execute solutions.',
    'It works on my machine.'
];

function getQuote() 
{
    var random_sentence = FAV_QUOTES_LIST[Math.floor(Math.random() * FAV_QUOTES_LIST.length)];
    return random_sentence
}

function refreshData()
{
    timeInterval = 3600;  // 3600 Seconds, 1 hour

    var quoatText = document.getElementsByClassName("col l8 offset-l2 m10 offset-m1 s10 offset-s1 center-align text");
    quoatText.innerHTML = getQuote()

    setTimeout(refreshData, timeInterval);
}

refreshData()