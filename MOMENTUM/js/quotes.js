const quotes = [
    {
        quote:"삶에 대한 절망 없이는 삶에 대한 희망도 없다",
        author:"hangang.life",
    },
    {
        quote:"꿈을 현실로",
        author:"hangang.life",
    },
    {
        quote:"안심하는걸 불안해 하는 나를홀려",
        author:"hangang.life",
    },
    {
        quote:"우리들은 감탄과 희망과 사랑으로 산다",
        author:"hangang.life",
    },
    {
        quote:"네가 창문을 열면 내게도 창이 보여",
        author:"hangang.life",
    },
    {
        quote:"역경은 희망에 의해서 극복된다",
        author:"hangang.life",
    },
    {
        quote:"자기만의 의사로 이것을 포기할 권리는 없다",
        author:"hangang.life",
    },
    {
        quote:"인간이 절망하는 곳에는 어떠한 신도 살 수 없다",
        author:"hangang.life",
    },
    {
        quote:"희망없이는 인간생활이 영위될 수 없다",
        author:"hangang.life",
    },
    {
        quote:"대부분의 사람들은 고요한 절망 속에서 인생을 살아간다",
        author:"hangang.life",
    },
    {
        quote:"희망은 일생의 어떠한 때도 우리들을 버리지 않는다",
        author:"hangang.life",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;