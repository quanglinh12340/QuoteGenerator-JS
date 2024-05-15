const apiUrl = 'https://api.quotable.io/random'
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btnNewQuote = document.getElementById('new-quote')
const btnNewTwitter = document.getElementById('new-twitter')

btnNewQuote.onclick = () => getQuote(apiUrl)
btnNewTwitter.onclick = () => tweet()

async function getQuote(url) {
    const respone = await fetch(url)
    const data = await respone.json()

    quote.innerHTML = data.content
    author.innerHTML = data.author
}
getQuote(apiUrl)

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '-----by ' + author.innerHTML, 'Tweet Window', 'width=600, height=300')
}
tweet()