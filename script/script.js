const title_1 = document.getElementById("title_1");
const article_1 = document.getElementById("article_1");

let toggle_1 = 0;

title_1.addEventListener("click", () => {
    if (toggle_1 === 0) {
        article_1.style.visibility = 'visible';
        article_1.style.display = 'block';
        toggle_1 = 1;
    }
    else {
        article_1.style.visibility = 'hidden';
        article_1.style.display = 'none';
        toggle_1 = 0;
    }
});