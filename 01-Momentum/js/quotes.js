const quotes = [
    {
        quote: "À vaillant coeur rien d’impossible.",
        author: "Jacques Cœur"
    },
    {
        quote: "Dans une grande âme tout est grand.",
        author: "Blaise Pascal"
    },
    {
        quote: "Chacun voit midi à sa porte.",
        author: "French proverb"
    },
    {
        quote: "Je pense, donc je suis.",
        author: "Rene Descartes"
    },
    {
        quote: "On ne change pas une équipe qui gagne.",
        author: "French proverb"
    },
    {
        quote: "Il faut bonne mémoire après au’on a menti",
        author: "Pierre Corneille"
    },
    {
        quote: "La vie est une fleur dont l’amour est le miel.",
        author: "Victor Hugo"
    },
    {
        quote: "Il n’y a qu’un bonheur dans la vie, c’est d’aimer et d’être aimé. ",
        author: "George Sand"
    },
    {
        quote: "Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Choisissez votre femme par l’oreille bien plus que par les yeux.",
        author: "French proverb"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
