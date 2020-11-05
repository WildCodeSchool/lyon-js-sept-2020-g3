import React, { useState } from 'react';
import './Question.scss';
import Chat from '@material-ui/icons/Chat';
import questionImg from '../Images/archibot.png';
import bgImage from '../Images/etoile.jpg';

function Question() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [messageArray, setMessageArray] = useState([]);

  const updateQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const resetQuestion = () => {
    setQuestion('');
  };
  const updateResponse = (apiResult) => {
    setResponse(apiResult.cnt);
  };
  const updateMessageArray = () => {
    setMessageArray([...messageArray, question, response]);
    console.log(messageArray);
  };
  const submitToAPI = () => {
    const encodedURIMessage = encodeURIComponent(question);
    const url = `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=153798&key=SXUv8ChYDG1AboDK&uid=User&msg=${encodedURIMessage}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
        'x-rapidapi-key': '9d66c11fc3msh0ddb29e8617b481p17897bjsn28a020b0c4bf',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitQuestionWithEnter = (e) => {
    e.preventDefault();
    submitToAPI();
    resetQuestion();
  };

  return (
    <div>
      <div
        className="questionBody"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="questionBubble">
          <span className="tip">{response}</span>
        </div>
        <div>
          <img className="questionImage" src={questionImg} alt="Archibot" />
        </div>

        <form
          onSubmit={(e) => {
            submitQuestionWithEnter(e);
            updateMessageArray();
          }}
        >
          <button type="button" className="chatIcon">
            <Chat />
          </button>
          <div className="questionArea">
            <input
              className="questionInput"
              placeholder="Question..."
              onFocus={(e) => {
                e.target.placeholder = '';
              }}
              onBlur={(e) => {
                e.target.placeholder = 'Question...';
              }}
              value={question}
              onClick={resetQuestion}
              onChange={updateQuestion}
            />
            <button
              className="questionButton"
              type="button"
              onClick={submitToAPI}
            >
              {' '}
              ASK ME!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Question;
