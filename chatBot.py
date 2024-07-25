import re

# Define patterns and responses
college_info = {
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
}

def get_college_info(college, topic):
    return college_info.get(college, {}).get(topic, "I'm sorry, I don't have information on that topic.")

def chatbot_response(user_input):
    patterns_responses = [
        (r'tell me about (IIT|NIT|VIT|BITS)', lambda m: get_college_info(m.group(1).lower(), 'general')),
        (r'what is the admission process for (IIT|NIT|VIT|BITS)', lambda m: get_college_info(m.group(1).lower(), 'admission')),
        (r'what is the cutoff for (IIT|NIT|VIT|BITS)', lambda m: get_college_info(m.group(1).lower(), 'cutoff')),
        (r'what are the courses offered by (IIT|NIT|VIT|BITS)', lambda m: get_college_info(m.group(1).lower(), 'courses'))
    ]
    for pattern, response_func in patterns_responses:
        match = re.search(pattern, user_input, re.IGNORECASE)
        if match:
            return response_func(match)
    return "I'm sorry, I didn't understand that. Can you please rephrase your question?"

def main():
    print("College Selection Chatbot: Hi Anish! Ask me about IIT, NIT, VIT, and BITS for B.Tech.")
    while True:
        user_input = input("You: ")
        if re.search(r'bye|exit|quit', user_input, re.IGNORECASE):
            print("Chatbot: Goodbye Anish! Have a nice day!")
            break
        response = chatbot_response(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()
