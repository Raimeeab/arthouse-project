// ------------------------------ Global Variables ------------------------------
var searchFormEl = document.getElementById("search-form");
var clearHistoryEl = document.getElementById("clear-history")
var searchDivEl = document.getElementById("search-div");
var hiddenDivEl = document.getElementById("hidden-div");
var artistBioSection = document.getElementById("artist-bio");
var enterArtistNameEL = document.getElementById("artist-name");
var artistNameEl  = document.getElementById("result-artist-title");
var artistBioEl = document.getElementById("result-artist-bio");
var artistName = "";
var artistBio = "";
var displayResultEl = document.querySelector(".display-result");
//var displayResultEl = $('.display-result');
var resultDisplayEl = document.querySelector('#result-artwork-list');
//var favBtnEl = document.querySelector(".fav-btn");
var displayNumber = 9;

// ------------------------------ Artic API ------------------------------
function searchArtist(input) {
    var searchQueryURL = "https://api.artic.edu/api/v1/artworks/search?q=";
    var searchResultIDsArray = [];
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
            resultDisplayEl.innerHTML = ""; //clear item list
            for (i = 0; i < response.data.length; i++) {
                searchResultIDsArray.push(response.data[i].id);
            }
            console.log("Search Artist Result:");
            console.log(response);
            displaySearchResult(searchResultIDsArray);
        })
        .catch(function (error) {

            console.log("Error Message 1: " + error);
        });
}

//use IDs to get each of all image info out and store in an array
function displaySearchResult(searchResultArray) {
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
            artistName = response.data[0].artist_title;
            artistBio = getArtistWikiBio(artistName);

            console.log("Artwork Result:");
            console.log(response);
            console.log("Artist:");
            console.log(artistName);
            console.log("Bio:");
            console.log(artistBio);

            //display images and result
            for (i = 0; i < displayNumber; i++) {
                var imgTitle = response.data[i].title;
                var imgURL = "https://www.artic.edu/iiif/2/" + response.data[i].image_id + "/full/843,/0/default.jpg";
                var imgYear = response.data[i].date_display;
                var imgArtist = response.data[i].artist_title;
                var imgDesc = response.data[i].thumbnail.alt_text;
                //var imgEra = getEra(imgYear);

                var displayResultItem = document.createElement('div');
                displayResultItem.setAttribute("class", "result-item columns small-4 p-3");
                
                var displayImgItem = document.createElement('img');
                displayImgItem.setAttribute("src",imgURL);
                displayImgItem.setAttribute("class", "img");

                //displayResultItem.innerHTML = "<img src=\"" + imgURL + "\">";

                var displayTitleItem = document.createElement('h2');
                displayTitleItem.style.color = "#DCA493";
                displayTitleItem.setAttribute("class", "img-title p-3 text-center");
                displayTitleItem.textContent = imgTitle;

                var displayArtistItem = document.createElement('h5');
                displayArtistItem.style.color = "#433C38";
                displayArtistItem.setAttribute("class", "img-artist text-center");
                displayArtistItem.innerHTML = "Artist: " + imgArtist;

                var displayYearItem = document.createElement('h5');
                displayYearItem.style.color = "#433C38";
                displayYearItem.setAttribute("class", "img-year text-center");
                displayYearItem.innerHTML = "Year: " + imgYear;

                var displayDescItem = document.createElement('p');
                displayDescItem.setAttribute("class", "img-desc text-center");
                displayDescItem.innerHTML = imgDesc;

                var favBtn = document.createElement('button');
                favBtn.setAttribute("class", "button secondary large fav-btn far fa-star");

                displayResultItem.appendChild(displayImgItem);
                displayResultItem.appendChild(favBtn);
                displayResultItem.appendChild(displayTitleItem);
                displayResultItem.appendChild(displayArtistItem);
                displayResultItem.appendChild(displayYearItem);
                displayResultItem.appendChild(displayDescItem);

                resultDisplayEl.appendChild(displayResultItem);

            }
        })
        .catch(function (error) {

            alert("Error Message 2: " + error);
        });
    displayResultEl.style.display = "flex"; // to unhidden the div
}

//
function getEra(year) {
    if (year < 400) {
        return "Prehistoric Art";
    } else if (year >= 400 || year < 500) {
        return "Ancient Art";
    } else if (year >= 500 || year < 1400) {
        return "Medieval";
    } else if (year >= 1400 || year < 1600) {
        return "Renaissance";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    } else if (year >= 400 || year < 499) {
        return "Ancient Art";
    }

}



// ------------------------------ Wiki API ------------------------------
function getArtistWikiBio(artistName) {
    //tutorial: https://stackoverflow.com/questions/4452102/how-to-get-plain-text-out-of-wikipedia
    var artistNameWUnderscore = artistName.replace(/\s+/g, '_'); //replace space with _
    var searchQueryURL = "https://neon-cors-proxy.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles="
        + artistNameWUnderscore +
        "&prop=extracts&exintro&explaintext=0&formatversion=2&format=json";
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
            document.getElementById("read-more-button")?.remove();
            // ? - if it doesn't exist, don't throw an error
            console.log("Wiki API:");
            console.log(response);
            console.log("Artist Name: " + artistName);
            artistNameEl.textContent = artistName;
            console.log(response.query.pages[0].extract);
            // Artists full biography
            var fullBio = response.query.pages[0].extract;
            // Cut biography to 500 characters 
            var shortBio = fullBio.substring(0, 500) + "...";
            console.log(shortBio);
            // Create a span element 
            var readMoreEl = document.createElement("span");
            // Delete the double up 
            readMoreEl.id = "read-more-button";
            readMoreEl.textContent = "Show more";
            // readMoreEl.innerHTML += readMoreEl;
            artistBioSection.appendChild(readMoreEl);
            var showLess = true;
            readMoreEl.onclick = function (){
                // Allows user to toggle between showing the long and short bio
                if (showLess) {
                    artistBioEl.textContent = fullBio;
                    readMoreEl.textContent = "Show less";
                    showLess = false;
                } else {
                    artistBioEl.textContent = shortBio;
                    readMoreEl.textContent = "Show more";
                    showLess = true;
                }
            };

            artistBioEl.textContent = shortBio;
            
            return response.query.pages[0].extract; //bio
        })
        .catch(function (error) {

            console.log("Error Message 1: " + error);
        });

}



// function renderResult() {
//     displayResult.style.display = "block";

//     var titleHTML = '<h1 id="result-artist-title">' + artistName + '</h1>';
//     var bioHTML = '<h2 id="result-artist-bio">' + artistBio + '</h2>';

//     displayResult.appendChild(titleHTML);
//     displayResult.appendChild(bioHTML);

// }

function init() {
    displayResultEl.style.display = "none";
}

// function formSubmitHandler(event) {
//     event.preventDefault();

//     var input = userInputEl.value.trim();
//     if (input) {
//         console.log(input);
//         searchArtist(input);
//     } else {
//         alert("Please type something.");
//     }
// }

function formSubmitHandler(event){
    event.preventDefault();
    var artistName = enterArtistNameEL.value.trim();
    if (artistName) {
        searchArtist(artistName);
        // searchDivEl.textContent = "";

        // var inputEl = document.createElement("input");
        // inputEl.classList = "search-field-narrow";
        // inputEl.setAttribute("type", "text");
        // inputEl.setAttribute("placeholder", "Artist Name");
        // inputEl.setAttribute("id", "artist-name");

        // var buttonEl = document.createElement("button");
        // buttonEl.classList = "search-button-narrow";
        // buttonEl.setAttribute("id", "search-button");
        // buttonEl.textContent = "Search";

        // hiddenDivEl.appendChild(inputEl);
        // hiddenDivEl.appendChild(buttonEl);

    } else {
        alert("Enter Artist Name:");//change into modal
    }
}

function favBtnHandler(event){
    //var imgName = $(event.target).parent().children(".img-title").val();
}

init();

searchFormEl.addEventListener('submit', formSubmitHandler);
//favBtnEl.addEventListener("click", favBtnHandler);
//displayResultEl.on('click',favBtnHandler);
//displayResultEl.on('click',favBtnHandler);

var homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener('click', function(){
    artistBioSection.innerHTML = "";
    displayResultEl.innerHTML = "";

});