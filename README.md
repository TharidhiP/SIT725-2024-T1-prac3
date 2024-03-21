# SIT725-2024-T1-prac3

1. Static File Service: A simple web server is provided through the Express framework to serve static files (such as HTML, CSS, 
JavaScript, images, etc.) to clients. These static files are stored in the public folder and served using the express.static
middleware.

2. Page Layout and Interaction: The homepage index.html defines a simple page layout, including a navigation bar, main 
content area, card section, and a modal form.

3. Card Content: The page contains several cards, each consisting of a title, image, link, and description. These card contents 
are defined in the cardList array within a JavaScript file and dynamically added to the page using the addCards function.

4. Form Submission Handling: A form on the page is used for submitting user-inputted data. When the user clicks the submit 
button, the JavaScript function submitForm retrieves the data from the form and prints it to the console.
