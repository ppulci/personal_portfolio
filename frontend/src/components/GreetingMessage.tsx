"use client";
import TypeIt from "typeit-react";

// Update greetings to include per-letter speeds and pause
const greetings = [
  {
    // "Welcome 😎"
    letters: [
      { char: "W", speed: 100 },
      { char: "e", speed: 60 },
      { char: "l", speed: 50 },
      { char: "c", speed: 80 },
      { char: "o", speed: 70 },
      { char: "m", speed: 60 },
      { char: "e ", speed: 50 },
      { char: "😎", speed: 1000, isEmoji: true, animation: "shake" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Hey There! 👋"
    letters: [
      { char: "H", speed: 100 },
      { char: "e", speed: 40 },
      { char: "y", speed: 120 },
      { char: " ", speed: 80 },
      { char: "t", speed: 90 },
      { char: "h", speed: 80 },
      { char: "e", speed: 60 },
      { char: "r", speed: 70 },
      { char: "e ", speed: 50 },
      { char: "👋", speed: 1000, isEmoji: true, animation: "wave right" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Sup ✌️"
    letters: [
      { char: "S", speed: 90 },
      { char: "u", speed: 80 },
      { char: "p ", speed: 70 },
      { char: "✌️", speed: 1000, isEmoji: true, animation: "wave middle" },
    ],
    pauseAfter: 2500,
    deleteSpeed: 900,
  },
  {
    // "Boo 👻"
    letters: [
      { char: "B", speed: 120 },
      { char: "o", speed: 80 },
      { char: "o ", speed: 100 },
      { char: "👻", speed: 1000, isEmoji: true, animation: "scare" },
    ],
    pauseAfter: 2500,
    deleteSpeed: 900,
  },
  {
    // "Howdy 🤠"
    letters: [
      { char: "H", speed: 100 },
      { char: "o", speed: 80 },
      { char: "w", speed: 90 },
      { char: "d", speed: 70 },
      { char: "y ", speed: 2000 },
      { char: "🤠", speed: 1000, isEmoji: true, animation: "jump" },
    ],
    pauseAfter: 2500,
    deleteSpeed: 900,
  },
  {
    // "Knock Knock ✊"
    letters: [
      { char: "K", speed: 100 },
      { char: "n", speed: 70 },
      { char: "o", speed: 60 },
      { char: "c", speed: 80 },
      { char: "k ", speed: 70 },
      { char: "K", speed: 100 },
      { char: "n", speed: 70 },
      { char: "o", speed: 60 },
      { char: "c", speed: 80 },
      { char: "k ", speed: 70 },
      { char: "✊", speed: 1000, isEmoji: true, animation: "knock" },
    ],
    pauseAfter: 1200,
    deleteSpeed: 1000,
  },
  {
    // "Umm Actually 🤓☝️"
    letters: [
      { char: "U", speed: 200 },
      { char: "m", speed: 70 },
      { char: "m", speed: 70 },
      { char: " ", speed: 70 },
      { char: "a", speed: 200 },
      { char: "c", speed: 70 },
      { char: "t", speed: 70 },
      { char: "u", speed: 70 },
      { char: "a", speed: 70 },
      { char: "l", speed: 70 },
      { char: "l", speed: 70 },
      { char: "y ", speed: 70 },
      { char: "🤓☝️", speed: 1000, isEmoji: true, animation: "nerd" },
    ],
    pauseAfter: 2500,
    deleteSpeed: 900,
  },
  {
    // "... still here 👀"
    letters: [
      { char: ".", speed: 300 },
      { char: ".", speed: 300 },
      { char: ".", speed: 300 },
      { char: " ", speed: 100 },
      { char: "s", speed: 90 },
      { char: "t", speed: 70 },
      { char: "i", speed: 60 },
      { char: "l", speed: 80 },
      { char: "l ", speed: 70 },
      { char: "h", speed: 100 },
      { char: "e", speed: 80 },
      { char: "r", speed: 60 },
      { char: "e ", speed: 70 },
      // { char: "? ", speed: 70 },
      { char: "👀", speed: 1000, isEmoji: true, animation: "stare" },
    ],
    pauseAfter: 3500,
    deleteSpeed: 1000,
  },
];

export default function GreetingMessage() {
  return (
    <div className="text-8xl font-bold">
      <TypeIt
        options={{
          loop: true,
          waitUntilVisible: true,
        }}
        getBeforeInit={(instance) => {
          greetings.forEach((greeting) => {
            greeting.letters.forEach((letter) => {
              if (letter.isEmoji) {
                instance.type(
                  `<span class="emoji ${letter.animation}">${letter.char}</span>`,
                  { speed: letter.speed }
                );
              } else {
                instance.type(letter.char, { speed: letter.speed });
              }
            });
            instance.pause(greeting.pauseAfter).delete(greeting.deleteSpeed);
          });
          return instance;
        }}
      />
    </div>
  );
}
