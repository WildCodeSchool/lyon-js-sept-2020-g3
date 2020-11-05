import React, { useState } from 'react';
import './Question.scss';
import Chat from '@material-ui/icons/Chat';
import questionImg from '../Images/archibot.png';
import bgImage from '../Images/etoile.jpg';

function Question() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(
    "Hi, I'm Archibot your new best friend !"
  );
  const [messageArray, setMessageArray] = useState([]);

  // /en permanence quand on change l'input/
  const updateQuestion = (e) => {
    setQuestion(e.target.value);
  };
  // /quand on clique sur l'input/
  const resetQuestion = () => {
    setQuestion('');
  };
  // on récupère la réponse de l'API
  const updateResponse = (apiResult) => {
    setResponse(apiResult.cnt);
  };
  // Quand on clique sur envoyer la question
  // const updateMessageArray = () => {
  //   setMessageArray([...messageArray, question, response]);
  //   console.log(messageArray);
  // };
  // Quand on clique sur envoyer la question
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
    setMessageArray([...messageArray, question, response]);
    console.log(messageArray);
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
            // updateMessageArray();
          }}
        >
          <button type="button" className="chatIcon">
            <Chat />
          </button>
          <div className="questionArea">
            <input
              className="questionInput"
              placeholder="Write something here..."
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
