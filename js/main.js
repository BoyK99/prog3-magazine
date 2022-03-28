window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/prog3-magazine/webservice/';
let infoGallery;

function init() {
    infoGallery = document.getElementById('info-gallery')
    // getInfoData(apiUrl, createInfoCards);
    getInfoData()
}
//function getInfoData(url, successHandler) {
function getInfoData() {
    //fetch(url)
    fetch(apiUrl)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        //.then(successHandler)
        .then(createInfoCards)
        .catch(ajaxErrorHandler)
}

/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
// line15: results is fout, wat voor woord gebruik je om data op te halen?
function createInfoCards(data) {
    // console.log(data)
    for (let card of data) {
        let infoCard = document.createElement('div');
        infoCard.classList.add('dish');
        infoCard.dataset.name = card.name;

        infoGallery.appendChild(infoCard);

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json(); })
            .then(fillInfoCard)
            .catch(ajaxErrorHandler);
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param data
 */
function fillInfoCard(data) {
    let infoCard = document.querySelector(`.dish[data-name='${data.name}']`);

    // Print name
    let title = document.createElement('h2');
    title.innerHTML = `${data.name}`;
    infoCard.appendChild(title);

    // Print img
    let image = document.createElement('img');
    image.src = `${data.image}`;
    infoCard.appendChild(image);
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = "Sukkel!";
    infoGallery.before(error);
}