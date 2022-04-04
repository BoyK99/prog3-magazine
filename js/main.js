window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/prog3-magazine/webservice/';
let cardData = {};
let favoriteItems = {};

let infoGallery = document.getElementById('info-gallery');
let detailModal = document.getElementById('detail-gallery');
let favoButton = document.getElementById('faveButton');

function init() {
    getInfoData()
    setTimeout(loadFavorites, 1000);

    infoGallery.addEventListener('click', galleryClickHandler);
    favoButton.addEventListener('click', addToFavorite)
    // infoGallery.addEventListener('click', addToFavorite);
}

function getInfoData() {
    fetch(apiUrl)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createInfoCards)
        .catch(ajaxErrorHandler)
}

/**
 * Create initial Pokémon cards based on initial API data
 * @param data
 */
function createInfoCards(data) {
    for (let card of data) {
        let infoCard = document.createElement('div');
        infoCard.classList.add('dish');
        infoCard.dataset.name = card.name;

        infoGallery.appendChild(infoCard);

        // Print name
        let title = document.createElement('h2');
        title.innerHTML = `${card.name}`;
        infoCard.appendChild(title);

        // Print img
        let image = document.createElement('img');
        image.src = `${card.image}`;
        infoCard.appendChild(image);

        // Details button
        let button1 = document.createElement('button');
        button1.innerHTML = "Details";
        button1.dataset.name = card.name;
        button1.dataset.id = card.id;
        infoCard.appendChild(button1);

        // Favorite button
        let button2 = document.createElement('button');
        button2.innerHTML = '<i class="fa-regular fa-heart"></i>';
        button2.dataset.id = card.id;
        button2.classList.add('favo');
        button2.id = "faveButton";
        infoCard.appendChild(button2);

        cardData[card.id] = card;
    }
}

function galleryClickHandler(e) {
    let clickedItem = e.target;
    let descriptionInfo = "http://localhost/prog3-magazine/webservice/index.php?id=" + e.target.dataset.id;
    console.log(descriptionInfo);

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get the information from the global stored data
    let card = cardData[clickedItem.dataset.id];

    //Reset the content
    detailModal.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${card.name} (#${card.id})`;
    detailModal.appendChild(title);

    //Display the shiny
    let image = document.createElement('img');
    image.src = `${card.image}`;
    detailModal.appendChild(image);

    //TODO: Print de data uit de tags in de webservice
    let dataInfo = document.createElement('p');
    dataInfo.innerHTML = `${e.recipe}`;
    detailModal.appendChild(dataInfo);
}

function addToFavorite(value) {
    favoriteItems.push(value);
    localStorage.setItem('todoItems', JSON.stringify(favoriteItems));
    //TODO: Verander leeg hartje in vol hartje met CSS.
    //TODO: Verander dish class naar favoItem.
}

function removeFavorite() {
    detailModal.classList.remove('hearth');
}

function loadFavoritesCss(favoItem) {

}

function loadFavorites() {
    //TODO: Haal alle favorieten uit localstorage en print ze.
    let favoriteItems = localStorage.getItem('todoItems');
    if (favoriteItems !== null) {
        favoItems = JSON.parse(favoriteItems);
        for (let favoItem of favoItems) {
            loadFavoritesCss(favoItem);
        }
    }
}

/**
 * Show an error message to inform the API isn't working correctly
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    console.log(data);
    error.classList.add('error');
    error.innerHTML = "Sukkel!";
    infoGallery.before(error);
}