import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Akinator.scss';
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
  const [isThinking, setIsThinking] = useState(false);
  const [newEnter, setnewEnter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
        setAnswers(response.data.answers);
        setQuestion(response.data.question);
      });
  };

  useEffect(() => {
    getAkinator();
  }, [isPlayed]);

  const playAgain = () => {
    setGuessed(false);
    setQuestion('');
    setAnswers([]);
    setSession('');
    setGuessCount([]);
    setClicked(false);
    setCounter(0);
    setIsPlayed(!isPlayed);
    setIsLoading(true);
  };

  const test = () => {
    setCounter(counter + 1);
    setIsThinking(true);
    if (counter === 2) {
      setIsThinking(false);
    } else {
      setTimeout(() => {
        setIsThinking(false);
      }, 200000);
    }
  };

  const userAnswer = () => {
    return (
      <div>
        {counter < 3 ? (
          <div key={guessCount[counter].name} className="akinatorBody">
            <img
              src={guessCount[counter].image}
              alt={`${guessCount[counter].name}'s face`}
              className="akinatorAnswerImg"
            />
            <br />
            <div className="answerBubble">
              <p>{`Your character is ... ${guessCount[counter].name} ?`}</p>
            </div>
            <div className="akinatorButton">
              {' '}
              <button type="button" onClick={() => setClicked(true)}>
                Yes
              </button>
              <button type="button" onClick={() => test()}>
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="akinatorBody">
            <div className="akinatorBubble">
              {' '}
              <p>
                Congratulation you beat me, you are the genious now !
                <br />
                Next time is going to be different ...
              </p>
            </div>
            <div className="imageContainer" />
            <div className="akinatorButton">
              {' '}
              <Link to="/">
                <button type="button">Home</button>
              </Link>
              <button type="button" onClick={() => playAgain()}>
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const thinkingRobot = () => {
    return (
      <div>
        {isThinking === true ? (
          <div className="akinatorBody">
            {' '}
            <div className="thinkingBubble">
              <p>Mmmm let me think...</p>
            </div>
            <div className="imageContainerThinking" />
          </div>
        ) : (
          <div>{userAnswer()}</div>
        )}
      </div>
    );
  };

  const robotAnswers = () => {
    return (
      <div>
        {clicked === true ? (
          <div className="akinatorBody">
            <div className="akinatorBubble">
              <p>
                I read your mind ! How does it feel ?...
                <br />
                Try to beat me next time !
              </p>
            </div>
            <div className="imageContainer" />
            <div className="akinatorButton">
              {' '}
              <Link to="/">
                <button type="button">Home</button>
              </Link>
              <button type="button" onClick={() => playAgain()}>
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div>{thinkingRobot()}</div>
        )}
      </div>
    );
  };

  const newQuestion = () => {
    return (
      <div>
        {guessed === false ? (
          <div className="akinatorBody">
            <div className="akinatorBubble">
              <p>{question}</p>
            </div>
            <div className="imageContainer" />
            <div className="akinatorQuestionButton">
              {answers.map((answer, index) => {
                return (
                  <button
                    className="questionAkinatorButton"
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
          </div>
        ) : (
          <div>{robotAnswers()}</div>
        )}
      </div>
    );
  };

  const akinatorStart = () => {
    return (
      <div>
        {newEnter === true ? (
          <div className="akinatorBody">
            <div className="akinatorBubble">
              <p>
                Hello my friend, think about a fictive or real character, I will
                read your mind... Are you ready ?
              </p>
            </div>

            <div className="imageContainer" />
            <div className="akinatorButton">
              {' '}
              <button type="button" onClick={() => setnewEnter(!newEnter)}>
                Ready
              </button>
              <Link to="/">
                <button type="button">Mmmm ... not yet</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>{newQuestion()}</div>
        )}
      </div>
    );
  };

  return (
    <div>
      {isLoading === true ? (
        <div className="akinatorBody">
          <div className="loader">LOADING...</div>
        </div>
      ) : (
        <div>{akinatorStart()}</div>
      )}
    </div>
  );
}

export default Akinator;
