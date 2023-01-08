/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Random Quote';

const quotes = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id odio imperdiet, a vestibulum purus aliquam. Ut sed congue ligula. In tincidunt tincidunt mi, rhoncus consectetur lacus elementum nec. Aenean ut tristique leo. Proin velit neque, feugiat vitae magna ac, vehicula rhoncus massa. Proin vitae gravida odio, ut vulputate urna. Praesent porta porta ligula aliquam semper. Duis vel posuere lacus. Proin in lorem placerat ante dapibus posuere. Quisque non augue sit amet diam commodo ultrices sit amet vitae nibh. Nam id ligula ut tortor aliquet posuere quis eu orci. ',
    author: 'Lorem ipsum',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id odio imperdiet, a vestibulum purus aliquam. Ut sed congue ligula. In  ',
    author: 'Lorem ipsum',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id odio imperdiet, a vestibulum purus aliquam. Ut sed congue ligula. In tincidunt tincidunt mi, rhoncus consectetur lacus elementum nec. Aenean ut tristique leo. Proin velit neque, feugiat vitae magna ac, vehicula rhoncus massa. Proin vitae gravida odio, ut vulputate urna. Praesent porta porta ligula aliquam ',
    author: 'Lorem ipsum',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id  ',
    author: 'Lorem ipsum',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id odio imperdiet, a vestibulum purus aliquam. Ut sed congue ligula. In tincidunt tincidunt mi, rhoncus consectetur lacus elementum nec. Aenean ut tristique leo. Proin velit neque, feugiat vitae magna ac, vehicula rhoncus massa. Proin vitae gravida odio, ut vulputate urna. Praesent porta porta ligula aliquam',
    author: 'Lorem ipsum',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elementum urna. Proin vestibulum purus id odio imperdiet, a vestibulum purus aliquam. Ut sed congue ligula. In tincidunt  ac, vehicula rhoncus massa. Proin vitae gravida odio, ut vulputate urna. Praesent porta porta ligula aliquam semper. Duis vel posuere lacus. Proin in lorem placerat ante dapibus posuere. Quisque non augue sit amet diam commodo ultrices sit amet vitae nibh. Nam id ligula ut tortor aliquet posuere quis eu orci. tincidunt mi, rhoncus consectetur lacus elementum nec. Aenean ut tristique leo. Proin velit neque, feugiat vitae magnatincidunt mi, rhoncus consectetur lacus elementum nec. Aenean ut tristique leo. Proin velit neque, feugiat vitae magna',
    author: 'Lorem ipsum',
  },
];

const quoteBtn = document.querySelector('.quote-btn');
const quoteText = document.querySelector('.quote-text');
const authorQuote = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);

  let generate = quotes[random];

  quoteText.innerText = generate.quote;
  authorQuote.innerText = generate.author;
});
