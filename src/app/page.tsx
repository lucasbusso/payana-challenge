"use client";
import React, { useState } from "react";
import { preguntas } from "../data.json";
import RatingComponent from "./RatingComponent";
import { Answer, Question } from "./interfaces";

const QUESTIONS: Question[] = preguntas;

export default function Home() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = QUESTIONS[answers.length];

  function handleRate(rating: Answer["valoracion"]) {
    setAnswers((answers) =>
      answers.concat({
        ...currentQuestion,
        valoracion: rating,
      })
    );
  }

  function handleRestart() {
    setAnswers([]);
  }

  if (!currentQuestion) {
    return (
      <>
        <div className="w-full text-2xl mb-6 text-left">Your valorations:</div>
        <ul className="border rounded-md p-4 w-full">
          {answers.map((answer) => (
            <li
              key={answer.id}
              className="flex items-center justify-between gap-2"
            >
              {answer.texto}{" "}
              <RatingComponent isReadOnly value={answer.valoracion} />
            </li>
          ))}
        </ul>
        <button className="border rounded-md p-4 mt-6" onClick={handleRestart}>
          Restart app
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>{currentQuestion.texto}</h1>
      <RatingComponent value={1} onChange={handleRate} />
    </div>
  );
}
