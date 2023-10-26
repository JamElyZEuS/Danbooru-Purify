// ==UserScript==
// @name        Danbooru Purifier
// @namespace   http://jamnedz.neocities.org
// @description Aaaaaa
// @include     http://danbooru.donmai.us/*
// @include     https://danbooru.donmai.us/*
// @grant       GM_addStyle
// @version     1
// ==/UserScript==

GM_addStyle ( `
    img { transition: filter 0.4s linear; }
    .blur { filter: blur(6Px) !important; transition: filter 0s linear; }
`)

var articles = document.getElementsByTagName('article');

for (let i = 0; i < articles.length; i++) {
    var rating = articles[i].getAttribute('data-rating');
    if (rating == 'e') {
        var img = articles[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild;
        img.classList.toggle("blur");
        img.addEventListener('mouseover', toggleBlur);
        img.addEventListener('mouseout', toggleBlur);
    }
}

function toggleBlur() {
    this.classList.toggle('blur');
}