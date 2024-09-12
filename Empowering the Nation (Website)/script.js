// Function to toggle the visibility of the chatbox
function toggleChat() {
    var chatbox = document.getElementById('chatbox');
    var toggleButton = document.getElementById('chatbox-toggle');

    // If the chatbox is visible, hide it and show the toggle button
    if (chatbox.style.display === 'block') {
        chatbox.style.display = 'none';
        toggleButton.style.display = 'block';
    } 
    // Otherwise, display the chatbox and hide the toggle button
    else {
        chatbox.style.display = 'block';
        toggleButton.style.display = 'none';
    }
}

// Predefined answers for frequently asked questions (FAQs)
// These responses are matched with specific user queries
var predefinedAnswers = {
    "What courses do you offer?": "We offer a variety of six-month courses focused on technical skills, entrepreneurship, and personal development. You can explore our Courses section for more details.",
    "How can I enroll?": "You can enroll by visiting our website and clicking the 'Enrol Now' button or contacting us through the 'Contact Us' page.",
    "What is the mission of your organization?": "Our mission is to empower the nation by providing quality education and skill development programs to foster self-reliance and success.",
    "How can I contact you?": "You can reach us via the 'Contact Us' page, where you'll find our email, phone number, and contact form.",
    "What are the course fees?": "Our course fees vary depending on the program. Please visit the Courses section or contact us for detailed information on pricing."
};

// Function to handle user input and provide chatbot responses
function handleUserInput() {
    // Get the user's input from the chatbox input field
    var userInput = document.querySelector('#chatbox-content input').value;
    var chatboxContent = document.getElementById('chatbox-content');

    if (userInput) {
        // Create a new paragraph element to display the user's message
        var userMessage = document.createElement('p');
        userMessage.textContent = "You: " + userInput;
        userMessage.style.fontWeight = 'bold'; // Highlight the user's message
        chatboxContent.appendChild(userMessage);

        // Create a response message for the chatbot
        var responseMessage = document.createElement('p');

        // Check if the input matches a predefined question and display the corresponding answer
        if (predefinedAnswers[userInput]) {
            responseMessage.textContent = "Chatbot: " + predefinedAnswers[userInput];
        } 
        // If no predefined answer is available, provide a fallback response
        else {
            responseMessage.textContent = "Chatbot: Sorry, I don't have an answer for that. Please contact us directly for more information.";
        }

        chatboxContent.appendChild(responseMessage);

        // Automatically scroll the chatbox to show the latest messages
        chatboxContent.scrollTop = chatboxContent.scrollHeight;

        // Clear the chatbox input field after submitting a message
        document.querySelector('#chatbox-content input').value = '';
    }
}

// Event listener to trigger the handleUserInput function when the "Send" button is clicked
document.querySelector('#chatbox-content button').addEventListener('click', handleUserInput);
