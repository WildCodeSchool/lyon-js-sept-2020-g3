import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Akinator() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [session, setSession] = useState('');
  const [guessCount, setGuessCount] = useState('');
  const [guessImage, setGuessImage] = useState('');

  const nextQuestion = (answerIndex) => {
    axios
      .get(
        `https://akinator-api.wild-projects.duckdns.org/nextquestion?sessionId=${session}&answer=${answerIndex}`
      )
      .then((response) => response.data)
      .then((response) => {
        if (response.guessCount !== undefined) {
          setGuessCount(response.answers[0].name);
          setGuessImage(response.answers[0].absolute_picture_path);
          console.log(response);
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
          <p>{question}</p>
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
        <div>
          <img src={guessImage} alt={`${guessCount}'s face`} width="200px" />
          <br />
          <p>{`Your character is ... ${guessCount}`}</p>
          <button type="button">Yes</button>
          <button type="button" onClick={() => nextQuestion()}>
            No
          </button>
        </div>
      )}
    </div>
  );
}

export default Akinator;
