// ANISH KUMAR SINHA(21BCE0671)
const collegeInfo = {
    'iit': {
        'general': 'IITs (Indian Institutes of Technology) are prestigious institutions offering B.Tech programs with high cutoffs and rigorous entrance exams like JEE Advanced.',
        'admission': 'Admission to IITs is through the JEE Advanced exam, which requires qualifying JEE Main first.',
        'cutoff': 'Cutoffs for IITs vary each year and depend on the number of applicants and their scores. Typically, top ranks are required.',
        'courses': 'IITs offer various B.Tech courses like Computer Science, Electrical, Mechanical, Civil, etc.'
    },
    'nit': {
        'general': 'NITs (National Institutes of Technology) are well-regarded institutions offering B.Tech programs. They accept JEE Main scores for admission.',
        'admission': 'Admission to NITs is through the JEE Main exam. Cutoffs vary based on the NIT and the course.',
        'cutoff': 'NIT cutoffs depend on the course and category of the applicant. They are usually lower than IITs.',
        'courses': 'NITs offer various B.Tech courses such as Computer Science, Electronics, Mechanical, Civil, etc.'
    },
    'vit': {
        'general': 'VIT (Vellore Institute of Technology) is a private university known for its engineering programs. It conducts its own entrance exam called VITEEE.',
        'admission': 'Admission to VIT is through the VITEEE exam. The exam tests your proficiency in subjects like Physics, Chemistry, and Mathematics.',
        'cutoff': 'VITEEE cutoffs vary each year based on the number of applicants and their performance.',
        'courses': 'VIT offers B.Tech courses in fields like Computer Science, Electronics, Mechanical, Civil, and Biotechnology.'
    },
    'bits': {
        'general': 'BITS (Birla Institute of Technology and Science) is a prestigious private institute with campuses in Pilani, Goa, and Hyderabad. Admission is through BITSAT.',
        'admission': 'Admission to BITS is through the BITSAT exam. It tests your proficiency in Physics, Chemistry, Mathematics, and English.',
        'cutoff': 'BITSAT cutoffs are typically high, especially for popular courses like Computer Science.',
        'courses': 'BITS offers B.Tech courses in Computer Science, Electronics, Electrical, Mechanical, Chemical, and Civil engineering.'
    }
};

function getCollegeInfo(college, topic) {
    return collegeInfo[college] ? collegeInfo[college][topic] || "I'm sorry, I don't have information on that topic." : "I'm sorry, I don't have information on that college.";
}

function chatbotResponse(userInput) {
    const patternsResponses = [
        { pattern: /tell me about (IIT|NIT|VIT|BITS)/i, topic: 'general' },
        { pattern: /what is the admission process for (IIT|NIT|VIT|BITS)/i, topic: 'admission' },
        { pattern: /what is the cutoff for (IIT|NIT|VIT|BITS)/i, topic: 'cutoff' },
        { pattern: /what are the courses offered by (IIT|NIT|VIT|BITS)/i, topic: 'courses' }
    ];

    for (const { pattern, topic } of patternsResponses) {
        const match = userInput.match(pattern);
        if (match) {
            return getCollegeInfo(match[1].toLowerCase(), topic);
        }
    }
    return "I'm sorry, I didn't understand that. Can you please rephrase your question?";
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');

    // Add user's message to chat
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message');
    userMessage.innerHTML = `<span class="user">You: </span>${userInput}`;
    chatBox.appendChild(userMessage);

    // Get chatbot's response
    const botResponse = chatbotResponse(userInput);

    // Add bot's response to chat
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message');
    botMessage.innerHTML = `<span class="bot">Chatbot: </span>${botResponse}`;
    chatBox.appendChild(botMessage);

    // Scroll chat to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    document.getElementById('user-input').value = '';
}
