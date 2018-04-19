# giphy
giphy assignment

### GIPHY API Used
* URL: https://api.giphy.com/v1/gifs/search?q=" + pet + "&api_key=" + api + "&limit=10" + "&offset=" + Math.floor(Math.random() * 100);
* PET = a specific variable relating to the value of a specific button. 
* API Key: T5QG7tiZ7gNndESnIGDNmEYQz9jUe5Dh

# HTML
* Broken into two major containers: 
    1. Wrapper container = bootstrap language, used for holding the dynamic buttons
    2. Container for the GIFs to display and the form field for inputting new buttons
        1. This container is broken into two columns that are mobile responsive in a bootstrap framework (columns)

# Functionality
* Functions
    1. Render buttons - 
        * function is utilized for creating dynamic buttons based on the topic array. 
        * This function first clears the buttons container to ensure when you add a new button, none are duplicated. 
        * Then various classes and attributes are added with dynamic inputs to capture the name in the array through a Loop.
    2. Adding a new Button
        * This is a on.click function that first,has a preventDefault() function to prevent data from being overwritten as the function progresses.
        * A local variable is established by taking the IDs value and pushing it to the new buttons attribute "data-name".
        * The render buttons function is then ran to regenerate all existing buttons that have been pushed to the array.
        * The last part includes running the API call from within the function, when it was left ouside, it would not trigger the API key (I had to make it a part of the internal function E2E)
    3. Display Pet - run the AJAX call
        * Follow the similar pattern used in various inclass activities. 
        Created a new div to push each GIF to, to be self contained to allow wrapping to occur versus having a GIF on each line.
    4. Animate function - 
        * used code from in class activity that changes the URL being directed. 
        * Additionally a if statement was used to read the state, which determined if the GIF had to move from Still to Animate (vice versa) 
       