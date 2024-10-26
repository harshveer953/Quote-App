let heading = document.querySelector("h1");
let author = document.querySelector("p");
let button = document.querySelector("button");

const fetchQuoute = async () => {
  const response = await fetch("http://quotable.io/random");
  const data = await response.json();
  heading.innerText = data.content;
  author.innerText = data.author;
};

fetchQuoute();
button.addEventListener("click", fetchQuoute);

setInterval(() => {
  fetchQuoute();
}, 15000);
