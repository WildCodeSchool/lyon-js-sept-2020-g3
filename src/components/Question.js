import React from 'react';
import './Question.scss';
import questionImg from '../Images/archibot.png';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      response: '',
    };
  }

  handleReset = () => {
    this.setState({ question: '' });
  };

  handleInput = (event) => {
    this.setState({ question: event.target.value });
  };

  questionToAPI = () => {
    const { question } = this.state;
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
        this.setState({ response: res.cnt });
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  render() {
    const { response, question } = this.state;
    return (
      <div>
        <div className="questionBody">
          <div className="questionBubble">
            <span className="tip">{response}</span>
          </div>
          <div>
            <img className="questionImage" src={questionImg} alt="Archibot" />
          </div>
          <div className="questionArea">
            <input
              className="questionInput"
              placeholder="WRITE HERE.."
              onFocus={(e) => {
                e.target.placeholder = '';
              }}
              onBlur={(e) => {
                e.target.placeholder = 'WRITE HERE..';
              }}
              value={question}
              onClick={this.handleReset}
              onChange={this.handleInput}
              // onKeyPress={this.questionToAPI} // A compléter avec ce qui est en commentaire au début de la fonction --> problème ça ne détecte plus le clic
            />
            <button
              className="questionButton"
              type="button"
              onClick={this.questionToAPI}
            >
              {' '}
              ASK ME!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
