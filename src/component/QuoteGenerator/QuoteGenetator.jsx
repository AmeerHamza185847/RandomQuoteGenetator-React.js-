import React, { useState } from 'react';
import './quote.css';

export const QuoteGenetator = () => {
    const [randomQuote , setRandomQuote] = useState("The more I study science, the more I believe in God. - Al-Biruni");

  const muslimScientistQuotes = [
    "The more I study science, the more I believe in God. - Al-Biruni",
    "The ink of the scholar is more sacred than the blood of the martyr. - Al-Zahrawi",
    "Science is the best pursuit, it elevates the human soul. - Ibn Khaldun",
    "To deny the possibility of change is to deny the possibility of life. - Ibn Rushd",
    "The essence of knowledge is to know what obedience and worship are. - Al-Ghazali",
    "Medicine is the science whereby health is preserved and sickness restored. - Ibn Sina",
    "The main purpose of science is to teach how one does not see something. - Jabir Ibn Hayyan",
    "Knowledge is the most precious wealth. - Al-Khwarizmi",
    "Mathematics is the language in which God has written the universe. - Al-Farabi",
    "The world is a book, and those who do not travel read only one page. - Ibn Battuta",
    "In the search for truth, follow reason and logic, not the masses. - Al-Kindi",
    "The more man learns, the more he realizes his ignorance. - Ibn Tufail",
    "Knowledge brings man nearer to God. - Al-Jahiz",
    "The aim of the wise is not to secure pleasure, but to avoid pain. - Ibn Hazm",
    "A scientist without books is like a soldier without weapons. - Ibn al-Nafis",
    "Do not be too shy to admit that you do not know something. - Al-Farabi",
    "The greatest sin is ignorance. - Al-Khwarizmi",
    "Medicine is a science from which one learns the states of the human body. - Ibn Sina",
    "The duty of a scholar is to teach the ignorant. - Al-Zahrawi",
    "The first thing we have to know is that knowledge is not only knowledge of the outward but also of the inward. - Al-Ghazali",
    "The art of healing comes from nature, not from the physician. - Ibn Sina",
    "The basis of every state is the education of its youth. - Al-Farabi",
    "Ignorance is the enemy of knowledge, not the opposite. - Al-Kindi",
    "The human being is created to inquire into the world. - Ibn Khaldun",
    "A wise man seeks by means of knowledge to train his soul. - Al-Ghazali",
    "A physician should not treat the disease but the patient who is suffering from it. - Ibn Sina",
    "To travel is to live. - Ibn Battuta",
    "A good teacher explains, a superior teacher demonstrates, a great teacher inspires. - Al-Kindi",
    "He who knows himself is truly happy. - Ibn Tufail",
    "The mind is not a vessel to be filled, but a fire to be kindled. - Al-Farabi",
    "Science without religion is lame, religion without science is blind. - Al-Biruni",
    "The more you know, the more you realize how much you don't know. - Ibn Rushd",
    "It is not the eyes that are blind, but the hearts. - Al-Ghazali",
    "The one who learns and teaches for the sake of Allah, Allah will make his way easy to paradise. - Al-Zahrawi",
    "Do not think that knowledge is hard to get. It needs a seeker, and that seeker will find it. - Ibn Sina",
    "One should seek knowledge even if it takes one to China. - Ibn Khaldun",
    "The key to success is knowledge and perseverance. - Al-Kindi",
    "The best thing a man can do in this world is to seek knowledge. - Al-Jahiz",
    "The more you study, the more you know; the more you know, the more you realize you don't know. - Ibn Tufail"
];

let handleRandomGenerateQuote = ()=>{
  let randomIndex = Math.floor(Math.random() * muslimScientistQuotes.length);
  setRandomQuote(muslimScientistQuotes[randomIndex]);
}

  return (
    <>
    <div className='mainWrapper'>
        <h1 className='header'>Random Quote Generator</h1>
        <p className='quote'>{randomQuote}</p>
        <button className='quoteGenerator' onClick={handleRandomGenerateQuote}>Generate Quote</button>
      </div>
    </>
  )
}
