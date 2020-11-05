import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Akinator() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [session, setSession] = useState('');
  const [guessCount, setGuessCount] = useState('');

  const nextQuestion = (answerIndex) => {
    axios
      .get(
        `https://akinator-api.wild-projects.duckdns.org/nextquestion?sessionId=${session}&answer=${answerIndex}`
      )
      .then((response) => response.data)
      .then((response) => {
        if (response.guessCount !== undefined) {
          setGuessCount(response.answers[0].name);
          console.log(response.answers[0]);
        } else {
          setQuestion(response.question);
          console.log(response);
        }
      });
  };

  const getAkinator = () => {
    axios
      .get('https://akinator-api.wild-projects.duckdns.org/newsession')
      .then((response) => {
        setSession(response.data.sessionId);
        return axios.get(
          `https://akinator-api.wild-projects.duckdns.org/nextquestion?sessionId=${response.data.sessionId}`
        );
      })
      .then((response) => {
        setAnswers(response.data.answers);
        setQuestion(response.data.question);
      });
  };

  useEffect(() => {
    getAkinator();
  }, []);

  return (
    <div className="answers">
      {guessCount === '' ? (
        <div>
          <input value={question} />
          {answers.map((answer, index) => {
            return (
              <button
                type="button"
                /* eslint-disable */
                key={index}
                /* eslint-enable */
                onClick={() => {
                  nextQuestion(index);
                }}
              >
                {answer}
              </button>
            );
          })}
        </div>
      ) : (
        <input value={`Your character is ... ${guessCount}`} />
      )}
    </div>
  );
}

export default Akinator;
