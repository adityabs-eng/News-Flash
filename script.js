const API_KEY = "pub_ff087493c5bf43dd8c95185d3ff7d580";
const BASE_URL = "https://newsdata.io/api/1/news";

let currentQuery = "india";
let currentPage = null; // NewsData uses nextPage
let pageSize = 6;

window.addEventListener("load", () => fetchNews("india", true));

async function fetchNews(query, reset = false) {
    try {
        if (reset) {
            document.getElementById("cards-container").innerHTML = "";
            currentPage = null;
        }

        currentQuery = query;

        let url = `${BASE_URL}?apikey=${API_KEY}&q=${query}&language=en&country=in`;

        if (currentPage) {
            url += `&page=${currentPage}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        bindData(data.results || []);

        currentPage = data.nextPage; // pagination token
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const template = document.getElementById("template-news-card");

    articles.slice(0, pageSize).forEach((article) => {
        if (!article.image_url) return;

        const cardClone = template.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    cardClone.querySelector("#news-img").src = article.image_url;
    cardClone.querySelector("#news-title").innerHTML = article.title;
    cardClone.querySelector("#news-desc").innerHTML = article.description || "";

    const date = new Date(article.pubDate).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
    });

    cardClone.querySelector("#news-source").innerHTML =
        `${article.source_id} • ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.link, "_blank");
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
    if (currentPage) {
        fetchNews(currentQuery, false);
    }
});
