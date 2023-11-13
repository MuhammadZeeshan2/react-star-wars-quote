import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';


const DATA = [
  {
    name: "Princess Leia",
    quotes: [
      "Help me Obi-Wan Kenobi, you're my only hope.",
      "Aren't you a little short for a stormtrooper?",
      "Why, you stuck up, half-witted, scruffy-looking Nerf herder.",
      "I'd just as soon kiss a Wookie.",
      "Governor Tarkin, I should have expected to find you holding Vader’s leash. I recognized your foul stench when I was brought on board.",
      "Will someone get this big walking carpet out of my way?"
    ]
  },
  {
    name: "Obi Wan Kenobi",
    quotes: [
      "In my experience, there is no such thing as luck.",
      "The truth is often what we make of it.",
      "Only a sith deals in absolutes.",
      "Who is more foolish? The fool or the fool who follows him?",
      "I have the high ground.",
      "If you strike me down, I shall become more powerful than you can possibly imagine."
    ]
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
