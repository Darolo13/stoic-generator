const generateQuote = () => {
  const quotes = [
    {
      quote: "First say to yourself what you would be; and then do what you have to do.",
      author: "Epictetus"
    },
    {
      quote: "Luck is what happens when preparation meets opportunity.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "You have power over your mind – not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius"
    },
    {
      quote: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…",
      author: "Marcus Aurelius"
    },
    {
      quote: "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius"
    },
    {
      quote: "If it is not right do not do it; if it is not true do not say it.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?",
      author: "Marcus Aurelius"
    },
    {
      quote: "People are not disturbed by things, but by the views they take of them.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.",
      author: "Marcus Aurelius"
    },
    {
      quote: "The soul becomes dyed with the color of its thoughts.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Don’t go on discussing what a good person should be. Just be one.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Remember that very little is needed to make a happy life.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus"
    },
    {
      quote: "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
      author: "Epictetus"
    },
    {
      quote: "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
      author: "Epictetus"
    },
    {
      quote: "He who laughs at himself never runs out of things to laugh at.",
      author: "Epictetus"
    },
    {
      quote: "Caretake this moment. Immerse yourself in its particulars. Respond to this person, this challenge, this deed. Quit evasions. Stop giving yourself needless trouble. It is time to really live; to fully inhabit the situation you happen to be in now.",
      author: "Epictetus"
    },
    {
      quote: "A ship should not ride on a single anchor, nor life on a single hope.",
      author: "Epictetus"
    },
    {
      quote: "It’s not what happens to you, but how you react to it that matters.",
      author: "Epictetus"
    },
    {
      quote: "You become what you give your attention to.",
      author: "Epictetus"
    },
    {
      quote: "No person is free who is not master of himself.",
      author: "Epictetus"
    },
    {
      quote: "It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "We suffer more often in imagination than in reality.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "Associate with people who are likely to improve you.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "Hang on to your youthful enthusiasms – you’ll be able to use them better when you’re older.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "If a man knows not to which port he sails, no wind is favorable.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "He suffers more than necessary, who suffers before it is necessary.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "The whole future lies in uncertainty: live immediately.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "To wish to be well is a part of becoming well.",
      author: "Lucius Annaeus Seneca"
    },
    {
      quote: "He who is brave is free.",
      author: "Lucius Annaeus Seneca"
    }
  ];
  let arrayIdx = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[arrayIdx].quote;
  document.getElementById("author").innerHTML = quotes[arrayIdx].author;

}
window.onload = () => {
  generateQuote();
  document.getElementById("generate").addEventListener('click', generateQuote);
}