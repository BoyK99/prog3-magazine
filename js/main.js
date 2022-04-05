window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/prog3-magazine/webservice/';
let descriptionUrl = "http://localhost/prog3-magazine/webservice/index.php?id=";
let cardData = {};
let infoData = {};
let favoriteItems = {};
let infoGallery;
let detailModal;
let favoButton;

function init() {
    getInfoData();
    // setTimeout(loadFavorites, 1000);

    favoButton = document.getElementsByTagName('i');
    detailModal = document.getElementById('detail-gallery');

    infoGallery = document.getElementById('info-gallery');
    infoGallery.addEventListener('click', galleryClickHandler);

    favoButton = document.getElementById('faveButton');
    // favoButton.addEventListener('click', addToFavorite)

    //infoGallery.addEventListener('click', addToFavorite);
    //detailModal = document.getElementById('detail-gallery');

}

// Card data ophalen
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
        button2.innerHTML = '<i class="fa-regular fa-star fa-xl"></i>';
        button2.dataset.id = card.id;
        button2.classList.add('favo');
        button2.id = "faveButton";
        infoCard.appendChild(button2);

        cardData[card.id] = card;
    }
}

// Description data
function getDescriptionData(id){
    fetch(descriptionUrl+id)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createDataCards)
        .catch(ajaxErrorHandler);
}


function createDataCards(datas) {
    let dataInfo = document.createElement('p');
    dataInfo.innerHTML = datas.recipe;
    detailModal.appendChild(dataInfo);

    let tagInfo = document.createElement('p');
    tagInfo.innerHTML = datas.tags;
    detailModal.appendChild(tagInfo);
}



function galleryClickHandler(e) {
    let clickedItem = e.target;
    console.log(clickedItem);
    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    getDescriptionData(clickedItem.dataset.id);

    //Get the information from the global stored data
    let card = cardData[clickedItem.dataset.id];

    //Reset the content
    detailModal.innerHTML = '';

    //Show name of array object
    let title = document.createElement('h1');
    title.innerHTML = `${card.name}`;
    detailModal.appendChild(title);

    //Display the image
    let image = document.createElement('img');
    image.src = `${card.image}`;
    detailModal.appendChild(image);
}

// function favoriteClickHandler() {
//
// }
//
// function addToFavorite(value) {
//     detailModal.classList.add('fa-solid');
//     favoriteItems.push(value);
//     localStorage.setItem('todoItems', JSON.stringify(favoriteItems));
//     //TODO: Verander leeg hartje in vol hartje met CSS.
//     //TODO: Verander dish class naar favoItem.
// }
//
// function removeFavorite() {
//     detailModal.classList.remove('fa-solid');
// }
//
// function loadFavoritesCss(favoItem) {
//
// }
//
// function loadFavorites() {
//     //TODO: Haal alle favorieten uit localstorage en print ze.
//     let favoriteItems = localStorage.getItem('todoItems');
//     if (favoriteItems !== null) {
//         favoItems = JSON.parse(favoriteItems);
//         for (let favoItem of favoItems) {
//             loadFavoritesCss(favoItem);
//         }
//     }
// }

/**
 * Show an error message to inform the API isn't working correctly
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    console.log(data);
    error.classList.add('error');
    error.innerHTML = "Werkt niet!";
    infoGallery.before(error);
}