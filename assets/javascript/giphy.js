$(document).ready(function(){

var topics = ["cat", "dog", "hamster", "birds", "rat", "mice", "snake", "pitbull", "kangaroo", "koala", "seals", "dolphins", "lions", "tigers"];


    function renderButtons() {
        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#search-buttons").empty();
        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var addedSearch = $("<button>");
            // Adding a class
            addedSearch.addClass("pet-button");
            // Adding type for bootstrap
            addedSearch.attr("type", "button");
            // Adding a data-attribute with a value of the movie at index i
            addedSearch.attr("data-name", topics[i]);
            // Providing the button's text with a value of the movie at index i
            addedSearch.text(topics[i]);
            // Adding the button to the HTML
            $("#search-buttons").append(addedSearch);
        };
    };

    renderButtons();

    //Add buttons to create 
    $("#add-pet").on("click", function(event) {
        event.preventDefault();
        var topic=$("#search-input").val()//("data-name");
        //push to the search array
        topics.push(topic);

        //console log to ensure that the info is being pushed to the array
        console.log(topics);
        
        //rerun renderButtons() to ensure the button is created
        renderButtons();

        //Clear the input field and display placeholder text
        $("#search-input").val("");
        $(".pet-button").on("click", displayPet);   
    });

    $(".pet-button").on("click", displayPet);
        

    function displayPet() {
        $("#gif").empty();
        var pet = $(this).attr("data-name");
        console.log(pet);
        var api = "T5QG7tiZ7gNndESnIGDNmEYQz9jUe5Dh"
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pet + "&api_key=" + api + "&limit=10" + "&offset=" + Math.floor(Math.random() * 100);

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                var gifs = response.data;
                //console.log(gifs)
                

                //For loop to create div & append GIFs to the #gif div in HTML             
                for (var i = 0; i < gifs.length; i++) {
                    var newDiv = $("<div class='populateImage'>")
                    var newGifDiv = $("<img>");
                    newGifDiv.attr("src", gifs[i].images.fixed_height_still.url);
                    newGifDiv.attr("still", gifs[i].images.fixed_height_still.url);
                    newGifDiv.attr("animate", gifs[i].images.fixed_height.url);
                    newGifDiv.attr("data-state", "still");
                    //console.log(newGifDiv);
            
                    //var gifImageDiv = $("<img>");
                    var newGifRating = $("<p>Rating: " + gifs[i].rating + "</p>");
                    //console.log(newGifRating);
                    newDiv.append(newGifDiv);
                    newDiv.append(newGifRating);
                    $("#gif").append(newDiv);
                };

   
                
                //Alternate GIF between Still/Animate
                $("img").on("click", function() {
                    var state = $(this).attr("data-state");
                    //console.log(state)
                    if (state == "still") {
                        $(this).attr("src", $(this).attr("animate"));
                        $(this).attr("data-state", "animate");
                    }
                    if (state == "animate") {
                        $(this).attr("src", $(this).attr("still"));
                        $(this).attr("data-state", "still");
                    }
                });

            });
    };

})

