"use client";
import TypeIt from "typeit-react";

const greetings = [
  {
    // "Welcome 😎"
    letters: [
      { char: "W", speed: 50 },
      { char: "e", speed: 100 },
      { char: "l", speed: 50 },
      { char: "c", speed: 100 },
      { char: "o", speed: 100 },
      { char: "m", speed: 50 },
      { char: "e", speed: 50 },
      { char: " ", speed: 50 },
      { char: "😎", speed: 200, isEmoji: true, animation: "shake" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Hey There! 👋"
    letters: [
      { char: "H", speed: 50 },
      { char: "e", speed: 250 },
      { char: "y", speed: 50 },
      { char: " ", speed: 50 },
      { char: "t", speed: 50 },
      { char: "h", speed: 150 },
      { char: "e", speed: 350 },
      { char: "r", speed: 50 },
      { char: "e ", speed: 50 },
      { char: "👋", speed: 50, isEmoji: true, animation: "wave right" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Sup ✌️"
    letters: [
      { char: "S", speed: 50 },
      { char: "u", speed: 50 },
      { char: "p ", speed: 50 },
      { char: "✌️", speed: 50, isEmoji: true, animation: "wave middle" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Howdy 🤠"
    letters: [
      { char: "H", speed: 50 },
      { char: "o", speed: 50 },
      { char: "w", speed: 200 },
      { char: "d", speed: 50 },
      { char: "y ", speed: 100 },
      { char: "🤠", speed: 50, isEmoji: true, animation: "jump" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Knock Knock ✊"
    letters: [
      { char: "K", speed: 50 },
      { char: "n", speed: 100 },
      { char: "o", speed: 50 },
      { char: "c", speed: 100 },
      { char: "k ", speed: 100 },
      { char: "K", speed: 50 },
      { char: "n", speed: 50 },
      { char: "o", speed: 50 },
      { char: "c", speed: 100 },
      { char: "k ", speed: 200 },
      { char: "✊", speed: 100, isEmoji: true, animation: "knock" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // "Excuse me ☝️"
    letters: [
      { char: "E", speed: 50 },
      { char: "x", speed: 50 },
      { char: "c", speed: 200 },
      { char: "u", speed: 50 },
      { char: "s", speed: 50 },
      { char: "e", speed: 50 },
      { char: " ", speed: 50 },
      { char: "m", speed: 200 },
      { char: "e ", speed: 50 },
      { char: "☝️", speed: 50, isEmoji: true, animation: "wave middle" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    //Hey You 😁
    letters: [
      { char: "H", speed: 50 },
      { char: "e", speed: 50 },
      { char: "y", speed: 100 },
      { char: " ", speed: 50 },
      { char: "y", speed: 50 },
      { char: "o", speed: 200 },
      { char: "u ", speed: 100 },
      { char: "😁", speed: 50, isEmoji: true, animation: "scare" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  {
    // Yo 🤙
    letters: [
      { char: "Y", speed: 500 },
      { char: "o ", speed: 500 },
      { char: "🤙", speed: 50, isEmoji: true, animation: "knock" },
    ],
    pauseAfter: 3000,
    deleteSpeed: 1000,
  },
  // {
  //   // "Boo 👻"
  //   letters: [
  //     { char: "B", speed: 50 },
  //     { char: "o", speed: 50 },
  //     { char: "o ", speed: 50 },
  //     { char: "👻", speed: 50, isEmoji: true, animation: "scare" },
  //   ],
  //   pauseAfter: 3000,
  //   deleteSpeed: 1000,
  // },
  // {
  //   // " 👀"
  //   letters: [
  //     { char: "W", speed: 50 },
  //     { char: "h", speed: 50 },
  //     { char: "o", speed: 100 },
  //     { char: " ", speed: 50 },
  //     { char: "a", speed: 50 },
  //     { char: "r", speed: 50 },
  //     { char: "e", speed: 100 },
  //     { char: " ", speed: 50 },
  //     { char: "y", speed: 50 },
  //     { char: "o", speed: 100 },
  //     { char: "u? ", speed: 50 },
  //     { char: "👀", speed: 50, isEmoji: true, animation: "stare" },
  //   ],
  //   pauseAfter: 3000,
  //   deleteSpeed: 1000,
  // },
];

export default function GreetingMessage() {
  return (
    <div className="text-4xl sm:text-7xl lg:text-8xl font-bold">
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
