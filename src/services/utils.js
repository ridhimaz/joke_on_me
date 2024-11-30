export const makepromt = (userName, userJob, userHobbies, userPersonality, userLoveLife, userSleepTime) => {
    return `Roast me with this information. Make jokes which are humorous 
    and personal at the same time. My name is ${userName}.
    I am a ${userJob}. My hobbies are ${userHobbies},
    drinking and riding bikes. I am an ${userPersonality}.
    ${userLoveLife}. I sleep around ${userSleepTime}.
    Give the best 3 jokes on me. I want the result in array of 3 jokes. 
    Don't give the 3 quote and json name at beginning.`
}