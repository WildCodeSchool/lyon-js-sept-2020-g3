import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Akinator() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [session, setSession] = useState('');
  const [guessCount, setGuessCount] = useState([]);
  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);

  const nextQuestion = (answerIndex) => {
    axios
      .get(
        `https://akinator-api.wild-projects.duckdns.org/nextquestion?sessionId=${session}&answer=${answerIndex}`
      )
      .then((response) => response.data)
      .then((response) => {
        if (response.guessCount !== undefined) {
          for (let i = 0; i < 3; i += 1) {
            /* eslint-disable */
            setGuessCount((guessCount) => [
              /* eslint-enable */
              ...guessCount,
              {
                name: response.answers[i].name,
                image: response.answers[i].absolute_picture_path,
              },
            ]);
          }
          console.log(response);
          setGuessed(true);
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
  }, [isPlayed]);

  const test = () => {
    setGuessed(false);
    setQuestion('');
    setAnswers([]);
    setSession('');
    setGuessCount([]);
    setClicked(false);
    setCounter(0);
    setIsPlayed(!isPlayed);
  };

  const goodAnswer = () => {
    return (
      <div>
        {counter < 3 ? (
          <div key={guessCount[counter].name}>
            <img
              src={guessCount[counter].image}
              alt={`${guessCount[counter].name}'s face`}
              width="200px"
            />
            <br />
            <p>{`Your character is ... ${guessCount[counter].name}`}</p>
            <button type="button" onClick={() => setClicked(true)}>
              Yes
            </button>
            <button type="button" onClick={() => setCounter(counter + 1)}>
              No
            </button>
          </div>
        ) : (
          <div>
            <p>I think you beat me at this point</p>
            <Link to="/">
              <button type="button">Home</button>
            </Link>
            <button type="button" onClick={() => test()}>
              Play Again
            </button>
          </div>
        )}
      </div>
    );
  };

  const robotAnswers = () => {
    return (
      <div>
        {clicked === true ? (
          <div>
            <p>Congratulation you beat me !</p>
            <Link to="/">
              <button type="button">Home</button>
            </Link>
            <button type="button" onClick={() => test()}>
              Play Again
            </button>
          </div>
        ) : (
          <div>{goodAnswer()}</div>
        )}
      </div>
    );
  };

  return (
    <div className="answers">
      {guessed === false ? (
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
        <div>{robotAnswers()}</div>
      )}
    </div>
  );
}

export default Akinator;
