const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', generateQuote);

const animeQuotes = [
    {
        text: "The world is not beautiful; therefore, it is.",
        character: "Kino"
    },
    {
        text: "I'm not a cat!",
        character: "Sakamoto"
    },
    // ... Add more quotes here

    // Goku Quotes
    {
        text: "I am the hope of the universe. I am the answer to all living things that cry out for peace.",
        character: "Goku"
    },
    {
        text: "I’m always serious, even when I’m joking.",
        character: "Goku"
    },
    // ... Add more Goku quotes here

    // Vegeta Quotes
    {
        text: "I am the prince of all Saiyans once again!",
        character: "Vegeta"
    },
    {
        text: "I do not fear this new challenge. Rather, like a true warrior, I will rise to meet it.",
        character: "Vegeta"
    },
    // ... Add more Vegeta quotes here

    // Luffy Quotes
    {
        text: "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... that's the Pirate King!",
        character: "Luffy"
    },
    {
        text: "I don't want to be someone's reason for unhappiness. I want to be their reason for happiness!",
        character: "Luffy"
    },
    // ... Add more Luffy quotes here

    // Sasuke Quotes
    {
        text: "I have long since closed my eyes... My only goal is in the darkness.",
        character: "Sasuke"
    },
    {
        text: "I understand now. Even if I must take the devil's fruit, I must gain power. I am an avenger.",
        character: "Sasuke"
    },
    // ... Add more Sasuke quotes here

    // Naruto Quotes
    {
        text: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        character: "Naruto"
    },
    {
        text: "I'm not gonna die in a place like this. The same goes for you.",
        character: "Naruto"
    },
    // ... Add more Naruto quotes here

    // Itachi Quotes
    {
        text: "The ones who aren’t able to acknowledge their own selves are bound to fail.",
        character: "Itachi"
    },
    {
        text: "The more precious someone is to you, the more important their happiness becomes.",
        character: "Itachi"
    },
    // ... Add more Itachi quotes here

    // Zoro Quotes
    {
        text: "I don’t want to conquer anything. I just think the guy with the most freedom in this whole ocean... that’s the Pirate King!",
        character: "Zoro"
    },
    {
        text: "I don’t want to be someone’s reason for unhappiness. I want to be their reason for happiness!",
        character: "Zoro"
    },
    // ... Add more Zoro quotes here

    // Asta Quotes
    {
        text: "I'm not giving up! I'm going to be the Wizard King!",
        character: "Asta"
    },
    {
        text: "I'm not talented, I'm just working hard!",
        character: "Asta"
    },
    // ... Add more Asta quotes here
];

function generateQuote() {
    const randomQuote = animeQuotes[Math.floor(Math.random() * animeQuotes.length)];
    quoteElement.textContent = `"${randomQuote.text}" - ${randomQuote.character}`;
}
