function showMessage() {
    // Create a new h1 element
    var heading = document.createElement('h1');

    // Set the text content of the heading
    heading.textContent = 'Button clicked! Hello, world!';

    // Get the message container element by its ID
    var messageContainer = document.getElementById('messageContainer');

    // Append the heading to the message container
    messageContainer.appendChild(heading);
  }