import React from 'react';
import './Question.scss';
import Chat from '@material-ui/icons/Chat';
import questionImg from '../Images/archibot.png';
import bgImage from '../Images/etoile.jpg';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      response: '',
      // messagesArray: [],
    };
  }

  handleReset = () => {
    this.setState({ question: '' });
  };

  handleInput = (event) => {
    this.setState({ question: event.target.value });
  };

  // addToMessagesArray = () => {
  //   const { question, response } = this.state;
  //   this.setState((prevState) => {
  //     return {
  //       messagesArray: [...prevState.messagesArray, question, response],
  //     };
  //   });
  // };

  preventDefault = (event) => {
    event.preventDefault();
    this.questionToAPI();
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
    // this.addToMessagesArray();
    // console.log(this.state.messagesArray);
  };

  render() {
    const { response, question } = this.state;
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

          <form onSubmit={this.preventDefault}>
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
                onClick={this.handleReset}
                onChange={this.handleInput}
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
          </form>
        </div>
      </div>
    );
  }
}

export default Question;
