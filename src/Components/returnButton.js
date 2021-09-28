import React from "react";

class returnButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.parent = props.parent;
  }
  onclick = () => {
    this.parent.setState({ input: null });
  };
  render = () => {
    return <button onClick={this.onclick}> Return </button>;
  };
}

export default returnButton;
