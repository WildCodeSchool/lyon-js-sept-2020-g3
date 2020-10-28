import React from 'react';
const axios = require('axios').default;

/* Paramétrage de l'API [key, settings, etc...]
L'API est paramétrée sur le site : https://brainshop.ai/brain/153798/settings
Il faut créé une IA (Archibot est créé sur ce site) en s'inscrivant (ID et MDP Guillem)
Le brain créé est Archibot avec les settings suivantes : 
Title: Archibot
Plan: Free
Semantic engine: ok
Default cells: ok
Application: Mobile app
Brain ID: 153798
API key: SXUv8ChYDG1AboDK
API URL: http://api.brainshop.ai/get?bid=153798&key=SXUv8ChYDG1AboDK&uid=[uid]&msg=[msg]
  Avec : 
  bid: The brain ID.
  key: The access key for the brain.
  uid: The ID you assign to end user.
  msg: The message from user.
Brainmasters: Twiggui

*/

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

  questionToAPI = (event) => {
    // if (event.key === 'Enter') {
    const encodedURIMessage = encodeURIComponent(this.state.question);
    const url = `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=153798&key=SXUv8ChYDG1AboDK&uid=User&msg=${encodedURIMessage}`;
    console.log(url);

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
        console.log(res.cnt);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  render() {
    return (
      <div>
        <div className='bulle'>{this.state.response}</div>
        <div>
          <img src='robot' alt='Archibot' />
        </div>
        <div>
          <input
            placeholder='Ecrivez ici'
            value={this.state.question}
            onClick={this.handleReset}
            onChange={this.handleInput}
            // onKeyPress={this.questionToAPI} // A compléter avec ce qui est en commentaire au début de la fonction --> problème ça ne détecte plus le clic
          />
          <button type='button' onClick={this.questionToAPI}>
            {' '}
            Ask !
          </button>
        </div>
      </div>
    );
  }
}

export default Question;
