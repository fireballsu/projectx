// AI Agent Chatbot JavaScript
class Chatbot {
    constructor() {
        // Get references to HTML elements
        this.chatMessages = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('message-input');
        this.sendButton = document.getElementById('send-button');
        
        // Initialize the chatbot
        this.initializeEventListeners();
    }
    
    // Set up event listeners for user interactions
    initializeEventListeners() {
        // Send message when button is clicked
        this.sendButton.addEventListener('click', () => {
            this.sendMessage();
        });
        
        // Send message when Enter key is pressed
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }
    
    // Handle sending a message
    sendMessage() {
        const message = this.messageInput.value.trim();
        
        // Don't send empty messages
        if (!message) return;
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear the input field
        this.messageInput.value = '';
        
        // Get AI response after a short delay
        setTimeout(() => {
            const response = this.getAIResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }
    
    // Add a message to the chat display
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom of chat
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    // Generate AI response based on user input
    getAIResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greeting responses
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! How can I help you today?";
        }
        
        // Help responses
        if (message.includes('help') || message.includes('what can you do')) {
            return "I'm an AI assistant! I can chat with you, answer questions, and help with various topics. What would you like to know?";
        }
        
        // Name responses
        if (message.includes('name') || message.includes('who are you')) {
            return "I'm an AI chatbot created for a portfolio project. I'm here to demonstrate conversational AI capabilities!";
        }
        
        // Weather responses
        if (message.includes('weather')) {
            return "I don't have access to real-time weather data, but I'd recommend checking a weather app or website for current conditions!";
        }
        
        // Time responses
        if (message.includes('time') || message.includes('what time')) {
            const now = new Date();
            return `The current time is ${now.toLocaleTimeString()}. I'm a simple demo bot, so I can only show basic time!`;
        }
        
        // Thank you responses
        if (message.includes('thank') || message.includes('thanks')) {
            return "You're welcome! I'm happy to help. Is there anything else you'd like to know?";
        }
        
        // Goodbye responses
        if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
            return "Goodbye! It was nice chatting with you. Feel free to come back anytime!";
        }
        
        // Question responses
        if (message.includes('?')) {
            return "That's an interesting question! As a demo AI, I have limited knowledge, but I'm designed to be helpful and engaging.";
        }
        
        // Default responses
        const defaultResponses = [
            "That's interesting! Tell me more about that.",
            "I understand what you're saying. What else would you like to discuss?",
            "Thanks for sharing that with me. How can I help you further?",
            "That's a great point! I'm learning from our conversation.",
            "I see what you mean. This is a demo chatbot, so I have simple responses!",
            "That's fascinating! I'm here to chat and help however I can.",
            "I appreciate you talking with me. What's on your mind?",
            "That's really cool! I'm enjoying our conversation.",
            "I'm a simple demo chatbot, but I'm trying my best to respond!",
            "Thanks for the message! I'm here to demonstrate basic chat functionality."
        ];
        
        // Return a random default response
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
