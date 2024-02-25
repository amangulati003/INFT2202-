// Aman Gulati
// 100886369

// Log that the script has been loaded
console.log('ajax_script.js loaded');

// Define URLs for different data endpoints
let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data from a given URL and log the result
function fetchData(url) {
    // Use jQuery's $.get method to fetch data from the URL
    $.get(url, function(data) {
        // Log that data has been fetched from the specific URL
        console.log('Data fetched from:', url);
        // Log the data received from the URL
        console.log(data);
    });
}

// Function to put 2 random photos into the img elements in the HTML
function displayRandomPhotos() {
    // Fetch photos data from the specified URL
    $.get(url_photos, function(data) {
        // Initialize an array to store random indexes
        let randomIndexes = [];
        // Loop to generate 2 unique random indexes
        while (randomIndexes.length < 2) {
            // Generate a random index within the range of the data length
            let randomIndex = Math.floor(Math.random() * data.length);
            // Check if the random index is not already in the array
            if (!randomIndexes.includes(randomIndex)) {
                // If not, add the random index to the array
                randomIndexes.push(randomIndex);
            }
        }
        // Set the src attribute of the first image element to the URL of the first random photo
        $('#photo1').attr('src', data[randomIndexes[0]].url);
        // Set the src attribute of the second image element to the URL of the second random photo
        $('#photo2').attr('src', data[randomIndexes[1]].url);
    });
}

// Call the fetchData function for each URL to fetch and log data
fetchData(url_posts);
fetchData(url_comments);
fetchData(url_albums);
fetchData(url_todos);
fetchData(url_users);

// Call the displayRandomPhotos function to display 2 random photos
displayRandomPhotos();
