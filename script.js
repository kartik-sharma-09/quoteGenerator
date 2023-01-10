let btnE1 = document.getElementById("btn");
let quoteEl = document.getElementById("quote");
let author = document.getElementById("author");

let apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnE1.innerText = "loading...";
    btnE1.disabled = true;
    quoteEl.innerText = "updating...";
    author.innerText = "updating...";
    let response = await fetch(apiURL);
    let data = await response.json();
    let quotecontent = data.content;
    let quoteAuthor = data.author;
    quoteEl.innerText = quotecontent;
    author.innerText = "~ " + data.author;
    btnE1.innerText = "Get a Quote";
    btnE1.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error Happened, try again latter";
    author.innerText = "An error Happened";
    btnE1.innerText = "Get a Quote";
    btnE1.disabled = false;
  }
}
getQuote();

btnE1.addEventListener("click", getQuote);
