var userFormEl = document.querySelector('#search-form');
var userInputEl = document.querySelector('#search-input');
var searchDisplayEl = document.querySelector('#search-display-list');
var artistName = "";
var artistBio = "";
var displayResult = document.querySelector("#display-result");

// API: https://api.artic.edu/docs/#introduction
// Check out Endpoints for the Search function
// Check out Images section for calling an image
// Check out Fields for the parameters can be used when calling an image

function searchArtist(input) {
    var searchQueryURL = "https://api.artic.edu/api/v1/artworks/search?q=";
    var searchResultArray = [];
    searchQueryURL += input;

    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                console.log("Error:" + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            searchDisplayEl.innerHTML="";//clear item list
            for (i = 0; i < response.data.length; i++) {
                searchResultArray.push(response.data[i].id);
            }
            console.log("Search Artist Result:");
            console.log(response);
            renderArtworkResult(searchResultArray);
        })
        .catch(function (error) {

            console.log("Error Message 1: " + error);
        });
}

function renderArtworkResult(searchResultArray) {
    var searchQueryURL = "";
    var imageIdString = "";

    for (i = 0; i < searchResultArray.length; i++) {
        imageIdString += searchResultArray[i] + ",";
    }
    imageIdString = imageIdString.substring(0, imageIdString.length - 1);// remove the last comma
    //calling image example: https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id
    searchQueryURL = "https://api.artic.edu/api/v1/artworks?ids=" + imageIdString + "&fields=id,title,image_id,thumbnail,date_display,artist_title";

    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                console.log("Error:" + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            console.log("Artwork Result:");
            console.log(response);
            artistName = response.data[0].artist_title;
            artistBio = getArtistWikiBio(artistName);
            
            //display images
            for (i = 0; i < response.data.length; i++) {
                var imgTitle = response.data[i].title;
                var imgURL = "https://www.artic.edu/iiif/2/" + response.data[i].image_id + "/full/843,/0/default.jpg";

                var displayTitleItem = document.createElement('li');
                displayTitleItem.textContent = imgTitle;
                var displayImgItem = document.createElement('li');
                displayImgItem.innerHTML = "<img src=\"" + imgURL + "\" height=300>";

                searchDisplayEl.appendChild(displayTitleItem);
                searchDisplayEl.appendChild(displayImgItem);

            }
        })
        .catch(function (error) {

            alert("Error Message 2: " + error);
        });
}

// API: Wiki API
function getArtistWikiBio(artistName) {
    //tutorial: https://stackoverflow.com/questions/4452102/how-to-get-plain-text-out-of-wikipedia
    artistName = artistName.replace(/\s+/g, '_'); //replace space with _
    console.log("Artist Name: "+artistName);
    var searchQueryURL = "https://neon-cors-proxy.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=" + artistName + "&prop=extracts&exintro&explaintext&exchars=300&formatversion=2&format=json";

    //async
    //await
    fetch(searchQueryURL)
        .then(function (response) {
            if (!response.ok) {
                console.log("Error:" + response.status);
                throw response.json();
            }
            return response.json();
        })
        .then(function (response) {
            console.log("Wiki API:");
            console.log(response);
            console.log("Bio: " +response.query.pages[0].extract);
            return response.query.pages[0].extract;
        })
        .catch(function (error) {

            console.log("Error Message 1: " + error);
        });
}

function formSubmitHandler(event) {
    event.preventDefault();

    var input = userInputEl.value.trim();
    if (input) {
        console.log(input);
        searchArtist(input);
    } else {
        alert("Please type something.");
    }
}

function renderResult(){
    var titleHTML = '<h1 id="result-artist-title">'+artistName+'</h1>';
    var bioHTML = '<h2 id="result-artist-bio">'+artistBio+'</h2>';

    
    displayResult.appendChild(titleHTML);
    displayResult.appendChild(bioHTML);

    displayResult.style.display = "block";
}

function init(){
    displayResult.style.display = "none";
}

init();

userFormEl.addEventListener('submit', formSubmitHandler);