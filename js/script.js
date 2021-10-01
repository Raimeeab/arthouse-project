var userFormEl = document.querySelector('#search-form');
var userInputEl = document.querySelector('#search-input');


function searchForArtist(input) {
    var searchQueryURL = "https://neon-cors-proxy.herokuapp.com/https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&artistOrCulture=true&q=";
    var searchResult = [];
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
            searchResult = response.objectIDs;
            console.log(searchResult);
            result1(searchResult);
        })
        .catch(function (error) {

            alert("Error Message 1: " + error);
        });
}

function result1(searchResult) {

    for (i = 0; i < searchResult.length; i++) {
        var resultQueryURL = "https://neon-cors-proxy.herokuapp.com/https://collectionapi.metmuseum.org/public/collection/v1/objects/";
        resultQueryURL += searchResult[i];
        //console.log(resultQueryURL);
        fetch(resultQueryURL)
            .then(function (response) {
                if (!response.ok) {
                    console.log("Error:" + response.status);
                    throw response.json();
                }
                return response.json();
            })
            .then(function (response) {
                console.log("Artwork");
                console.log(response);
            })
            .catch(function (error) {

                alert("Error Message 2: " + error);
            });
    }

}

function formSubmitHandler(event) {
    event.preventDefault();

    var input = userInputEl.value.trim();
    if (input) {
        //input = capitalizeAString(input);
        console.log(input);
        searchForArtist(input);
    } else {
        alert("Please type something.");
    }
}

userFormEl.addEventListener('submit', formSubmitHandler);

//searchForArtist();