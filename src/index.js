import React from "react";
import ReactDOM from "react-dom";

import marvelAPI from "./api";

import CharacterCarousel from "./Components/Character";
import ReturnButton from "./Components/returnButton";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      charData: null,
    };
  }
  search = async () => {
    const el = document.getElementById("heroQuery");
    this.state.input = el;
    console.log(marvelAPI);
    const response = await marvelAPI
      .fetchCharacter(el.value)
      .catch(this.renderError);
    if (response.data.total) {
      this.setState({ charData: response.data.results });
    } else {
      this.renderError("No character found!");
    }
  };
  render() {
    if (!this.state.input)
      return (
        <div id="mainInput">
          <div>
            <input type="text" id="heroQuery"></input>
            <button id="Search" onClick={this.search}>
              Search
            </button>
          </div>
        </div>
      );
    else if (this.state.charData) {
      return (
        <div className="carouselContainer">
          <CharacterCarousel data={this.state.charData} />
          <ReturnButton parent={this} />
        </div>
      );
    }
  }
  renderError = async (err) => {
    console.error(err);
  };
}
ReactDOM.render(<Input />, document.getElementById("root"));
