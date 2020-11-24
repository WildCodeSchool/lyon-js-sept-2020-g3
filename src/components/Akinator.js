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
  const [getAnswer, setGetAnswer] = useState([]);
  const [allQuestion, setAllQuestion] = useState([]);
  const [userClick, setUserClick] = useState(false);

  const nextQuestion = (answerIndex) => {
    axios
      .get(
        `https://akinator-api.wild-projects.duckdns.org/nextquestion?sessionId=${session}&answer=${answerIndex}`
      )
      .then((response) => response.data)
      .then((response) => {
        setGetAnswer(response);
      });
  };

  const guessCountAnswer = () => {
    if (getAnswer.guessCount <= 2) {
      for (let i = 0; i < getAnswer.guessCount; i += 1) {
        /* eslint-disable */
        console.log(getAnswer);
        setGuessCount((guessCount) => [
          /* eslint-enable */
          ...guessCount,
          {
            name: getAnswer.answers[i].name,
            image: getAnswer.answers[i].absolute_picture_path,
          },
        ]);
      }
      setGuessed(true);
    } else {
      setQuestion(getAnswer.question);
      setUserClick(false);
    }
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

  useEffect(() => {
    guessCountAnswer();
  }, [getAnswer]);

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

  const thinking = () => {
    setCounter(counter + 1);
    setIsThinking(true);
    if (counter === 2) {
      setIsThinking(false);
    } else {
      setTimeout(() => {
        setIsThinking(false);
      }, 2000);
    }
  };

  const previousQuestion = () => {
    if (allQuestion.length > 1) {
      setQuestion(allQuestion[allQuestion.length - 1]);
      /* eslint-disable */
      const deleteLastQuestion = allQuestion.pop();
      /* eslint-enable */
    } else {
      setQuestion('Is your character real ?');
    }
  };

  const userAnswer = () => {
    return (
      <div>
        {counter < getAnswer.guessCount ? (
          <div key={guessCount[counter].name} className="akinatorBody">
            <div className="answerBubble">
              <p>{`Your character is ... ${guessCount[counter].name} ?`}</p>
            </div>
            <img
              src={guessCount[counter].image}
              alt={`${guessCount[counter].name}'s face`}
              className="akinatorAnswerImg"
            />
            <br />
            <div className="akinatorAnswerButton">
              {' '}
              <button
                type="button"
                className="akinatorBtn"
                onClick={() => setClicked(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className="akinatorBtn"
                onClick={() => thinking()}
              >
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
                <button type="button" className="akinatorBtn">
                  Home
                </button>
              </Link>
              <button
                type="button"
                className="akinatorBtn"
                onClick={() => playAgain()}
              >
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
                <button type="button" className="akinatorBtn">
                  Home
                </button>
              </Link>
              <button
                type="button"
                className="akinatorBtn"
                onClick={() => playAgain()}
              >
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
            <div className="previousQuestionButton">
              <button
                className="previousButton"
                type="button"
                onClick={() => previousQuestion()}
              >
                ↺
              </button>
            </div>
            <div className="akinatorBubble">
              <p>{question}</p>
            </div>
            <div className="imageContainer" />
            <div className="akinatorQuestionButton">
              {answers.map((answer, index) => {
                return (
                  <button
                    disabled={userClick === true}
                    className="questionAkinatorButton"
                    type="button"
                    /* eslint-disable */
                    key={index}
                    /* eslint-enable */
                    onClick={() => {
                      nextQuestion(index);
                      setAllQuestion([...allQuestion, question]);
                      setUserClick(true);
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
              <button
                type="button"
                className="akinatorBtn"
                onClick={() => setnewEnter(!newEnter)}
              >
                Ready
              </button>
              <Link to="/">
                <button type="button" className="akinatorBtn">
                  Mmmm ... not yet
                </button>
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
