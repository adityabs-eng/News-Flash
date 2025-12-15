const API_KEY = "3653cc76997379598e7f2349f2d2c59f"; 
const BASE_URL = "https://gnews.io/api/v4";

let currentQuery = "india";     
let currentPage = 1;            
let pageSize = 6;            

window.addEventListener("load", () => fetchNews("india", true));
function reload() {
    window.location.reload();
}

async function fetchNews(query, reset = false) {
    try {
        if (reset) {
            document.getElementById("cards-container").innerHTML = "";
            currentPage = 1;
        }

        currentQuery = query;

        const res = await fetch(
            `${BASE_URL}/search?q=${query}&lang=en&country=in&max=${pageSize}&page=${currentPage}&apikey=${API_KEY}`
        );

        const data = await res.json();
        bindData(data.articles || []);

        currentPage++; // Next page on next click
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const template = document.getElementById("template-news-card");

    articles.forEach((article) => {
        if (!article.image) return;

        const cardClone = template.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.image;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    const date = new Date(article.publishedAt).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
    });

    newsSource.innerHTML = `${article.source.name} • ${date}`;
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id, true);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-text").value.trim();
    if (!query) return;
    fetchNews(query, true);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

document.getElementById("load-more").addEventListener("click", () => {
    fetchNews(currentQuery, false);
});
