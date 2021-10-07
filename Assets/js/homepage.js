var artists = [];
var searchFieldEl = document.getElementById("search-button");
var clearHistoryEl = document.getElementById("clear-history")
var searchDivEl = document.getElementById("search-div");
var hiddenDivEl = document.getElementById("hidden-div");
var enterArtistNameEL = document.getElementById("artist-name")




var formSubmitHandler = function(event) {
    event.preventDefault();
    var artistName = enterArtistNameEL.value.trim();
    if(artistName){
        searchDivEl.textContent = "";

        var inputEl = document.createElement("input");
        inputEl.classList = "search-field-narrow";
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("placeholder", "Artist Name");
        inputEl.setAttribute("id", "artist-name");

        var buttonEl = document.createElement("button");
        buttonEl.classList = "search-button-narrow";
        buttonEl.setAttribute("id", "search-button");
        buttonEl.textContent = "Search"


        hiddenDivEl.appendChild(inputEl);
        hiddenDivEl.appendChild(buttonEl);

    } else{
        alert("Enter Artist Name:");//change into modal
    }
    
};

    searchFieldEl.addEventListener("click", formSubmitHandler);