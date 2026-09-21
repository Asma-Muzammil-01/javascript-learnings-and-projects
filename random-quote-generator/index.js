const quotes = [
    "Speak only if it improves upon the silence.",
    "Wise men speak because they have something to say; fools because they have to say something.",
    "Silence is a true friend who never betrays.",
    "Never miss a good chance to shut up.",
    "The quieter you become, the more you can hear.",
    "Confidence is silent. Insecurities are loud.",
    "Do not confuse calm with weakness.",
    "A truly strong person does not need to dominate.",
    "Strength lies in restraint.",
    "Those who know do not speak. Those who speak do not know.",
    "He who conquers himself is the mightiest warrior.",
    "The greatest victory is that which requires no battle.",
    "You have power over your mind — not outside events.",
    "Mastering others is strength. Mastering yourself is true power.",
    "Stillness reveals what noise hides.",
    "The strongest actions are often unseen.",
    "Silence is not empty. It is full of answers.",
    "In quietness are all things answered.",
    "Silence is a source of great strength.",
    "The best answer to anger is silence.",
    ];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function getRandomQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    
    
    if (usedIndexes.has(randomIndex)) continue

    const quote = quotes[randomIndex]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex)
    break
    }

}
