"use client";
import TypeIt from "typeit-react";

// Update greetings to include per-letter speeds and pause
const greetings = [
  {
    // "Welcome 😎"
    letters: [
      { char: "W", speed: 100 },
      { char: "e", speed: 300 },
      { char: "l", speed: 100 },
      { char: "c", speed: 300 },
      { char: "o", speed: 200 },
      { char: "m", speed: 100 },
      { char: "e", speed: 100 },
      { char: " ", speed: 100 },
      { char: "😎", speed: 300, isEmoji: true, animation: "shake" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Hey There! 👋"
    letters: [
      { char: "H", speed: 100 },
      { char: "e", speed: 250 },
      { char: "y", speed: 100 },
      { char: " ", speed: 100 },
      { char: "t", speed: 100 },
      { char: "h", speed: 150 },
      { char: "e", speed: 350 },
      { char: "r", speed: 100 },
      { char: "e ", speed: 100 },
      { char: "👋", speed: 100, isEmoji: true, animation: "wave right" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Sup ✌️"
    letters: [
      { char: "S", speed: 100 },
      { char: "u", speed: 100 },
      { char: "p ", speed: 100 },
      { char: "✌️", speed: 100, isEmoji: true, animation: "wave middle" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Howdy 🤠"
    letters: [
      { char: "H", speed: 100 },
      { char: "o", speed: 100 },
      { char: "w", speed: 300 },
      { char: "d", speed: 100 },
      { char: "y ", speed: 200 },
      { char: "🤠", speed: 100, isEmoji: true, animation: "jump" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Knock Knock ✊"
    letters: [
      { char: "K", speed: 100 },
      { char: "n", speed: 200 },
      { char: "o", speed: 100 },
      { char: "c", speed: 200 },
      { char: "k ", speed: 200 },
      { char: "K", speed: 100 },
      { char: "n", speed: 100 },
      { char: "o", speed: 100 },
      { char: "c", speed: 200 },
      { char: "k ", speed: 300 },
      { char: "✊", speed: 200, isEmoji: true, animation: "knock" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Excuse me ☝️"
    letters: [
      { char: "E", speed: 100 },
      { char: "x", speed: 100 },
      { char: "c", speed: 300 },
      { char: "u", speed: 100 },
      { char: "s", speed: 100 },
      { char: "e", speed: 100 },
      { char: " ", speed: 100 },
      { char: "m", speed: 300 },
      { char: "e ", speed: 100 },
      { char: "☝️", speed: 100, isEmoji: true, animation: "wave middle" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    //Hey You 😁
    letters: [
      { char: "H", speed: 100 },
      { char: "e", speed: 100 },
      { char: "y", speed: 200 },
      { char: " ", speed: 100 },
      { char: "y", speed: 100 },
      { char: "o", speed: 300 },
      { char: "u ", speed: 200 },
      { char: "😁", speed: 100, isEmoji: true, animation: "scare" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // Yo 🤙
    letters: [
      { char: "Y", speed: 500 },
      { char: "o ", speed: 500 },
      { char: "🤙", speed: 100, isEmoji: true, animation: "knock" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Boo 👻"
    letters: [
      { char: "B", speed: 100 },
      { char: "o", speed: 100 },
      { char: "o ", speed: 100 },
      { char: "👻", speed: 100, isEmoji: true, animation: "scare" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // " 👀"
    letters: [
      { char: "W", speed: 100 },
      { char: "h", speed: 100 },
      { char: "o", speed: 200 },
      { char: " ", speed: 100 },
      { char: "a", speed: 100 },
      { char: "r", speed: 100 },
      { char: "e", speed: 200 },
      { char: " ", speed: 100 },
      { char: "y", speed: 100 },
      { char: "o", speed: 200 },
      { char: "u? ", speed: 100 },
      { char: "👀", speed: 100, isEmoji: true, animation: "stare" },
    ],
    pauseAfter: 3000,
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
          speed: 75,
          deleteSpeed: 50,
        }}
        getBeforeInit={(instance) => {
          greetings.forEach((greeting) => {
            greeting.letters.forEach((letter) => {
              if (letter.isEmoji) {
                instance.type(
                  `<span class="emoji ${letter.animation}">${letter.char}</span>`
                );
              } else {
                instance.type(letter.char);
              }

              // Instead of using speed, use a manual pause to simulate variable pacing
              instance.pause(letter.speed || 100);
            });

            instance.pause(greeting.pauseAfter).delete(greeting.deleteSpeed);
          });

          return instance;
        }}
      />
    </div>
  );
}
