window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/prog3-magazine/webservice/';let cardData = {};
let infoGallery;
let detailModal;
let detailModalContent;
let detailModalCloseButton;

function init() {
    infoGallery = document.getElementById('info-gallery')
    getInfoData()
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
 *
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
        button1.classList.add('button');
        infoCard.appendChild(button1);

        // Favorite button
        let button2 = document.createElement('button');
        button2.innerHTML = "Favoriet";
        button2.dataset.id = card.id;
        button2.classList.add('button-favo');
        infoCard.appendChild(button2);

        cardData[card.id] = card;

    }
}

// /**
//  * Create the actual contents of the card based on the loaded API information
//  *
//  * @param data
//  */
// function fillInfoCard(data) {
//     let infoCard = document.querySelector(`.dish[data-name='${data.name}']`);
//
//     // Print name
//     let title = document.createElement('h2');
//     title.innerHTML = `${data.name}`;
//     infoCard.appendChild(title);
//
//     // Print img
//     let image = document.createElement('img');
//     image.src = `${data.image}`;
//     infoCard.appendChild(image);
// }

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    console.log(data);
    error.classList.add('error');
    error.innerHTML = "Sukkel!";
    infoGallery.before(error);
}