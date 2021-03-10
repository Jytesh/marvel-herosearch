import React from 'react';
import ReactDOM from 'react-dom';

import marvelAPI from './api';

import CharacterCarousel from './Components/Character';
class Input extends React.Component {
  constructor(){
    super()
    this.state = {
      input: '',
      charData: null
    }
  }
  search  = async() => {
    console.log('meme')
    const el = document.getElementById('heroQuery');
    this.state.input = el;
    const response = await marvelAPI.fetchCharacter(el.value).catch(this.renderError);
    if (response.data.total) {
      this.setState({ charData: response.data.results})
    } else {
      this.renderError('No character found!') 
    }
  }
  render() {
    if (!this.state.input) 
    return (
      <div id="mainInput">
        <div>
          <input type="text" id="heroQuery"></input>
          <button id="Search" onClick={this.search}>Search</button>
        </div>
      </div>
      )
    else if (this.state.charData) {
      return <CharacterCarousel data={this.state.charData}/>
    }
  }
  renderError = async(err) => {
    console.error(err)
  }
}
ReactDOM.render(<Input />, document.getElementById('root'));