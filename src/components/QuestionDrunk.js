import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './QuestionDrunk.scss';
import Background from './Background';

import conversation from '../Images/conversation.png';
import love from '../Images/ReactionArchiGIF/archibot-amoureux.gif';
import dingo from '../Images/ReactionArchiGIF/archibot-dingo.gif';
import nocomprendo from '../Images/ReactionArchiGIF/archibot-incompris.gif';
import angry from '../Images/ReactionArchiGIF/archibot-mecontent.gif';
import sad from '../Images/ReactionArchiGIF/archibot-sad.gif';
import beer from '../Images/beer.png';

const archibotReactionsGif = [love, dingo, nocomprendo, angry, sad];

function QuestionDrunk() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('What *burp* do you want ?');
  const [messageArray, setMessageArray] = useState([]);
  const [chat1, setChat1] = useState('on');
  const [chat2, setChat2] = useState('off');
  const [randomImage, setRandomImage] = useState(0);
  const [drunkLevel, setDrunkLevel] = useState(1);

  // useRef utilisé pour atteindre le bas de la conversation dans le mode de chat avec tous les messages
  const conversationBottom = useRef(null);
  // fonction qui permettra de scroller jusqu'au useRef défini ci-dessus
  const scrollToBottom = () => {
    conversationBottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Mise à jour du state question au fur et à mesure qu'on l'écrit
  const updateQuestion = (e) => {
    setQuestion(e.target.value);
  };
  // Clear de l'input de question
  const resetQuestion = () => {
    setQuestion('');
  };
  // Mise à jour du state array qui rassemble toutes les questions et réponses à la suite
  const updateMessageArray = () => {
    setMessageArray([...messageArray, question, response]);
  };
  const drunkLevelUp = () => {
    if (drunkLevel < 3) {
      setDrunkLevel(drunkLevel + 1);
    }
  };
  const drunkLevelDown = () => {
    if (drunkLevel > 1) {
      setDrunkLevel(drunkLevel - 1);
    }
  };

  const botResponseDrunkLevel1 = (string) => {
    const voyels = ['a', 'e', 'i', 'o', 'u'];
    const responseArray = string.split('');
    for (let i = 1; i <= responseArray.length; i += 1) {
      if (i % 3 === 0 && voyels.includes(responseArray[i]) === true) {
        responseArray[i] = voyels[Math.floor(Math.random() * voyels.length)];
      }
    }
    return responseArray.join('');
  };
  const botResponseDrunkLevel2 = (string) => {
    const responseArray = string.split(' ');
    let wordTmp = '';
    for (let i = 1; i <= responseArray.length; i += 1) {
      if (i % 3 === 0 && responseArray.length - i >= 2) {
        wordTmp = responseArray[i];
        responseArray[i] = responseArray[i + 1];
        responseArray[i + 1] = wordTmp;
      }
    }
    return responseArray.join(' ');
  };

  // Envoi de la question à l'API et stockage de la réponse dans le state
  const submitToAPI = () => {
    let encodedURIMessage = encodeURIComponent(question);
    let url = `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=153798&key=SXUv8ChYDG1AboDK&uid=User&msg=${encodedURIMessage}`;

    if (question === '') {
      setQuestion('...');
      setResponse('hhmmm... want a beer buddy ?!');
    } else if (drunkLevel === 1) {
      fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '9d66c11fc3msh0ddb29e8617b481p17897bjsn28a020b0c4bf',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const resDrunkLevel1 = botResponseDrunkLevel1(res.cnt);
          setResponse(resDrunkLevel1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (drunkLevel === 2) {
      fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '9d66c11fc3msh0ddb29e8617b481p17897bjsn28a020b0c4bf',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const resDrunkLevel1 = botResponseDrunkLevel2(res.cnt);
          setResponse(resDrunkLevel1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      encodedURIMessage = encodeURIComponent('qsdqsdqsd');
      url = `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=153798&key=SXUv8ChYDG1AboDK&uid=User&msg=${encodedURIMessage}`;
      fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '9d66c11fc3msh0ddb29e8617b481p17897bjsn28a020b0c4bf',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const resDrunkLevel1 = botResponseDrunkLevel1(
            botResponseDrunkLevel2(res.cnt)
          );
          setResponse(resDrunkLevel1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // Lance la fonction submitToAPI() sur pression de la touche entrée
  const submitQuestionWithEnter = (e) => {
    e.preventDefault();
    submitToAPI();
  };
  // Change le state du choix de mode de conversation
  const switchChatMode = () => {
    setChat1(chat1 === 'on' ? 'off' : 'on');
    setChat2(chat2 === 'on' ? 'off' : 'on');
  };
  const randomImageGif = () => {
    setRandomImage(Math.floor(Math.random() * archibotReactionsGif.length));
  };

  // Met à jour le tableau de stockage des Q/A et clear l'input de question quand le state response change
  useEffect(() => {
    updateMessageArray();
    resetQuestion();
    randomImageGif();
  }, [response]);

  useEffect(() => {
    scrollToBottom();
  }, [messageArray]);

  return (
    <div>
      <div className="questionBody">
        <Background />
        <button type="button" className="robotMode">
          <Link to="/Question">Normal mode</Link>
        </button>
        <div
          className={chat1 === 'on' ? 'chat1ContainerOn' : 'chat1ContainerOff'}
        >
          <div className="questionBubble">
            <span>{response}</span>
          </div>
          <div
            className="imageContainer"
            style={{
              backgroundImage: `url(${archibotReactionsGif[randomImage]})`,
            }}
          />
        </div>
        <div
          className={chat2 === 'on' ? 'chat2ContainerOn' : 'chat2ContainerOff'}
        >
          {messageArray.map((element, index) => {
            return (
              <div
                /* eslint-disable */
                key={index}
                /* eslint-enable */
                className="Message"
              >
                {index !== 0 &&
                  (index % 2 === 0 ? (
                    <div className="humanMessage">{element}</div>
                  ) : (
                    <div className="botMessage">{element}</div>
                  ))}
              </div>
            );
          })}
          <div ref={conversationBottom} />
        </div>

        <form
          className="writeArea"
          onSubmit={(e) => {
            submitQuestionWithEnter(e);
          }}
        >
          <div className="drunkSettings">
            <button
              className="drunkDown"
              type="button"
              onClick={drunkLevelDown}
            >
              -
            </button>
            <div className="drunkLevel">
              {drunkLevel === 1 && (
                <div className="beerNb">
                  <img src={beer} alt="beer icon" className="beer" />
                </div>
              )}
              {drunkLevel === 2 && (
                <div className="beerNb">
                  <img src={beer} alt="beer icon" className="beer" />
                  <img src={beer} alt="beer icon" className="beer" />
                </div>
              )}
              {drunkLevel === 3 && (
                <div className="beerNb">
                  <img src={beer} alt="beer icon" className="beer" />
                  <img src={beer} alt="beer icon" className="beer" />
                  <img src={beer} alt="beer icon" className="beer" />
                </div>
              )}
            </div>
            <button className="drunkUp" type="button" onClick={drunkLevelUp}>
              +
            </button>
          </div>

          <button
            type="button"
            className="chatIconButton"
            onClick={switchChatMode}
          >
            <div
              className="chatIcon"
              style={{ backgroundImage: `url(${conversation})` }}
            />
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
              ASK ME!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionDrunk;
