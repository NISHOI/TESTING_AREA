document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0621a8d1e5094702bed155c2c447c897';
    const url = `https://newsapi.org/v2/everything?q=charles&from=2024-06-02&to=2024-06-03&apiKey=${apiKey}`;  // Add country parameter

    async function fetchNews() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                displayNews(data.articles);
            } else {
                console.error('Error fetching news:', data.message);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    function displayNews(articles) {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            if (article.urlToImage && article.description) {
                const newsCard = document.createElement('div');
                newsCard.classList.add('news-card');

                const newsImage = document.createElement('img');
                newsImage.src = article.urlToImage;
                newsCard.appendChild(newsImage);

                const newsTitle = document.createElement('h3');
                newsTitle.textContent = article.title;
                newsCard.appendChild(newsTitle);

                const newsDescription = document.createElement('p');
                newsDescription.textContent = article.description;
                newsCard.appendChild(newsDescription);

                const newsLink = document.createElement('a');
                newsLink.href = article.url;
                newsLink.textContent = 'Read More';
                newsLink.target = '_blank';
                newsCard.appendChild(newsLink);

                newsContainer.appendChild(newsCard);
            }
        });
    }

    fetchNews();
});
