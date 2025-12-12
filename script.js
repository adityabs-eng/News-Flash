const API_KEY = "a2e93530a59d47f9831d29c9f77edc58";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

let currentQuery = "India";   // default load
let currentPage = 1;
let pageSize = 6;             // 6 posts per load

window.addEventListener("load", () => fetchNews(currentQuery, true));

function reload() {
    window.location.reload();
}

async function fetchNews(query, reset = false) {
    if (reset) {
        currentPage = 1;
        document.getElementById("cards-container").innerHTML = "";
    }

    currentQuery = query;

    const apiURL = `${BASE_URL}${query}&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    try {
        const res = await fetch(apiURL);
        const data = await res.json();

        if (data.articles) {
            bindData(data.articles);
        }

        currentPage++; // Next page for Load More

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description || "No description available.";

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

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value.trim();
    if (!query) return;
    fetchNews(query, true);

    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

// ⭐ LOAD MORE BUTTON
document.getElementById("load-more").addEventListener("click", () => {
    fetchNews(currentQuery, false);
});
