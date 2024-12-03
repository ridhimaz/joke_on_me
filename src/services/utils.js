export const makepromt = (userName, userJob, userHobbies, userPersonality, userLoveLife, userSleepTime) => {
    return `
    Roast me with this information. 
    Make jokes which are humorous 
    and personal at the same time. 
    Name: ${userName}.
    Occupation: ${userJob}. 
    Hobbies: ${userHobbies},
    Personality: ${userPersonality}.
    Love-life: ${userLoveLife}. 
    Bed-between: ${userSleepTime}.
    Give the best 3 jokes on me.
    Give the response with formatting and indentation.
    Don't include any other information, just the jokes.`
}

export const questions = [
    {
        id: 'name',
        question: 'What is your name?',
        type: 'text',
        placeholder: 'My name is...'
    },
    {
        id: 'job',
        question: 'What do you do?',
        type: 'text',
        placeholder: 'I am a...'
    },
    {
        id: 'hobbies',
        question: 'What are your hobbies?',
        type: 'text',
        placeholder: 'My hobbies are...'
    },
    {
        id: 'personality',
        question: 'What is your personality type?',
        type: 'mcq',
        options: ['Extrovert', 'Introvert']
    },
    {
        id: 'lovelife',
        question: 'What happened with your last ex?',
        type: 'mcq',
        options: ['I ditched my last ex', 'I got ditched by my last ex']
    },
    {
        id: 'sleep',
        question: 'When do you sleep?',
        type: 'mcq',
        options: ['9P.M - 11P.M', '11P.M - 1A.M', '1A.M - 3A.M', 'After 3 A.M']
    },
];