let a = "Why are Assembly programmers always soaking wet? They work below C-level."
let b ="Why do Java programmers have to wear glasses? Because they don’t C#."
let c ="How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It’s HTML5."
let d = "A programmer had a problem. He decided to use Java. He now has a ProblemFactory."
let e = "3 SQL databases walked into a NoSQL bar. A little while later they walked out, because they couldn’t find a table."
let f = "An SQL query goes into a bar, walks up to two tables, and asks, Can I join you?"
let g = "A web developer walks into a restaurant. He immediately leaves in disgust as the restaurant was laid out in tables."
let arr = [ a,b,c,d,e,f,g]
let arr1 = arr[Math.floor(Math.random() * arr.length)];
console.log("arr1");
document.querySelector('.para').innerHTML = ` " ${arr1} " `;

function refresh() {
  window.location.reload();
};