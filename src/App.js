import React, { useState } from 'react';
import './App.css';

const apologyMessages = [
  "I am really sorry for messing up everything once again and hurting you. I know I don't deserve your forgiveness. You have tried many times to tell me and make me understand, and you are absolutely right that I don't have patience. I totally and genuinely agree with you. I don't even know whether I deserve a chance or not, or if I will even get one. But a genuine request from my side is for a chance to fix the mess I have made. I will genuinely try my best, and this will be the last sorry from my side because after this, I will not commit a mistake for which I have to say sorry.",
  "Regarding the situation with Shubhankar and me, and the issue of selfishness, I understand now that I was dragging it out unnecessarily. Your reaction was completely normal, and I was in the wrong. I've always believed that if something is bothering someone, it's best to talk it out and clear the air. That's what I genuinely tried to do this afternoon, and I realize now that I had completely misunderstood the situation. Instead of solving the misunderstanding, I created a new one.",
  "Regarding the 'flush system' comment, I genuinely didn't mean it the way it came out. What I was trying to say is that when we're stressed, tense, or even happy, we can go to a temple, sit before God, and share everything to feel relaxed. I get that same feeling of relief when I share things with you. After sharing, I feel relaxed. This is what I wanted to tell you, and I'm not just making this up. I wanted to say the same thing at that time but wasn't able to formulate it properly.",
  "I'm not with you for money or opportunities. If that were the case, we wouldn't have been together before April or May. Back then, I had no freelance work, my father wasn't working, and my uncle only worked a few days a week. I was with you because I knew our relationship wasn't about money. I genuinely want to be for you what you are for me. I know you have other people in your life and you don't need me for that, but if I could become that person for you one day, I would be the happiest person alive.",
  "I want to be your 'flush system.' I believe that if everything is going smoothly, it benefits both of us. When I talked about money or work, I meant that I tend to get too focused on those things. And when it comes to trust... who could be more unfortunate than me for breaking your trust multiple times? I swear I will not break it this time.",
  "I'm not just saying this for the sake of it; I meant everything I said in that voicemail. I just wanted you to understand your importance in my life. But it seems like whenever I try to do something good, my 'kismat' (fate) works against me and makes things worse. Genuinely, can we start fresh and forget what happened? A new beginning with the sunrise of Navratri? Please, this time with a 'Marathi manus' or a 'Himachali,' not a 'UP guy.' What do you say?"
];

const secretCode = "Navratri New Beginnings";

function App() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const [showHandshake, setShowHandshake] = useState(false);

  const handleNext = () => {
    if (messageIndex < apologyMessages.length - 1) {
      setMessageIndex(messageIndex + 1);
    }
  };

  const handleForgive = () => {
    setForgiven(true);
    setShowHandshake(true);
  };

  return (
    <div className="App">
      {!forgiven ? (
        <>
          <div className="sorry-text">I'M SO SORRY</div>
          <div className="message-container">
            <p className="message">{apologyMessages[messageIndex]}</p>
          </div>
          {messageIndex < apologyMessages.length - 1 ? (
            <button className="next-button" onClick={handleNext}>Next</button>
          ) : (
            <div className="forgive-hands" onClick={handleForgive}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="left-hand">
                <path d="M383.2,203.4c-28.3-28-65.8-43.4-105.3-43.4H256c-39.5,0-77,15.4-105.3,43.4C122.4,231.7,107,269.2,107,308.7 c0,39.5,15.4,77,43.4,105.3C178.7,442.3,216.2,458,256,458h21.9c39.5,0,77-15.4,105.3-43.4c28.3-28.3,43.4-65.8,43.4-105.3 C426.6,269.2,411.6,231.7,383.2,203.4z M256,426c-29.9,0-58-11.6-79.2-32.8C155.6,372,144,343.9,144,312 c0-29.9,11.6-58,32.8-79.2C198,211.6,226.1,200,256,200h21.9c29.9,0,58,11.6,79.2,32.8c21.2,21.2,32.8,49.3,32.8,79.2 c0,29.9-11.6,58-32.8,79.2C335.9,414.4,307.8,426,277.9,426H256z" fill="#ffc107"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="right-hand">
                <path d="M383.2,203.4c-28.3-28-65.8-43.4-105.3-43.4H256c-39.5,0-77,15.4-105.3,43.4C122.4,231.7,107,269.2,107,308.7 c0,39.5,15.4,77,43.4,105.3C178.7,442.3,216.2,458,256,458h21.9c39.5,0,77-15.4,105.3-43.4c28.3-28.3,43.4-65.8,43.4-105.3 C426.6,269.2,411.6,231.7,383.2,203.4z M256,426c-29.9,0-58-11.6-79.2-32.8C155.6,372,144,343.9,144,312 c0-29.9,11.6-58,32.8-79.2C198,211.6,226.1,200,256,200h21.9c29.9,0,58,11.6,79.2,32.8c21.2,21.2,32.8,49.3,32.8,79.2 c0,29.9-11.6,58-32.8,79.2C335.9,414.4,307.8,426,277.9,426H256z" fill="#ffc107"/>
              </svg>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="thank-you-text">THANK YOU</div>
          <div className="secret-code-container">
            <p>Share this secret code to let them know:</p>
            <p className="secret-code">{secretCode}</p>
          </div>
          {showHandshake && (
            <div className="handshake-container">
              <svg className="handshake" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#FFC107" d="M416,224c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S433.67,224,416,224Z"/>
                <path fill="#FFC107" d="M96,224c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S113.67,224,96,224Z"/>
                <path fill="#FFC107" d="M256,224c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S273.67,224,256,224Z"/>
                <path fill="#FFC107" d="M160,320c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S177.67,320,160,320Z"/>
                <path fill="#FFC107" d="M352,320c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S369.67,320,352,320Z"/>
                <path fill="#FFC107" d="M256,96c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S273.67,96,256,96Z"/>
                <path fill="#FFC107" d="M416,96c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S433.67,96,416,96Z"/>
                <path fill="#FFC107" d="M96,96c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32S113.67,96,96,96Z"/>
              </svg>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;