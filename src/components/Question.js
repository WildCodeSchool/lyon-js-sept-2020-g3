import React, { useState, useEffect } from 'react';
import './Question.scss';
import Chat from '@material-ui/icons/Chat';
import questionImg from '../Images/archibot.png';

function Question() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(
    "Hi, I'm Archibot your new best friend !"
  );
  const [messageArray, setMessageArray] = useState([]);
  const [chat1, setChat1] = useState('on');
  const [chat2, setChat2] = useState('off');

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
  };
  const switchChatMode = () => {
    setChat1(chat1 === 'on' ? 'off' : 'on');
    setChat2(chat2 === 'on' ? 'off' : 'on');
  };

  useEffect(() => {
    updateMessageArray();
    resetQuestion();
  }, [response]);

  return (
    <div>
      <div className="questionBody">
        <div
          className={chat1 === 'on' ? 'chatContainerOn' : 'chatContainerOff'}
        >
          <div className="questionBubble">
            <span className="tip">{response}</span>
          </div>
          <div>
            <img className="questionImage" src={questionImg} alt="Archibot" />
          </div>
        </div>
        <div
          className={chat2 === 'on' ? 'chatContainerOn' : 'chatContainerOff'}
        >
          {messageArray.map((element) => {
            let turn = 'human';
            if (turn === 'human') {
              turn = 'bot';
              return <div className="humanChat">{element}</div>;
            }
            turn = 'human';
            return <div className="botChat">{element}</div>;
          })}
        </div>
        <form
          className="writeArea"
          onSubmit={(e) => {
            submitQuestionWithEnter(e);
            // updateMessageArray();
          }}
        >
          <button type="button" className="chatIcon" onClick={switchChatMode}>
            <Chat />
          </button>

          <div className="questionArea">
            <input
              className="questionInput"
              placeholder="Write something here..."
              value={question}
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
