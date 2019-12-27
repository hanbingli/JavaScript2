'use strict'

let quotePool = [
    {
        quote: 'Don\'t part with your illusions. When they are gone you may still exist, but you have ceased to live.',
        author: '- Mark Twain'
    },

    {
        quote: 'Had I not seen the Sun, I could have borne the shade.',
        author: '- Emily Dickinson'
    },

    {
        quote: 'What makes a man is what he does when the storm comes.',
        author: '- Alexander Dumas'
    },

    {
        quote: 'Stay hungry, stay foolish.',
        author: '- Steve Jobs'
    },

    {
        quote: 'Not anyone can become a great artist, but a great artist can come from anywhere.',
        author: '- Ratatouille'
    },

    {
        quote: 'The sad truth is that most evil is done by people who never make up their minds to be good or evil.',
        author: '- Hannah Arendt'
    },
    
]

document.getElementById('button').addEventListener('click',randomQuote)


function randomQuote(){
    let random = quotePool[Math.floor(Math.random()* quotePool.length)];
    let randomQ = random.quote;
    let randomA = random.author;
    document.getElementById('quoteContent').innerHTML= randomQ;
    document.getElementById('author').innerHTML= randomA;
}
