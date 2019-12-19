import React from "react";
import { Button, Row } from "antd";

class App extends React.Component {
  state = {
    backgroundColor: "Blue",
    colors: [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "tomato",
      "pink",
      "white",
      "black"
    ]
  };

  changeBackground = () => {
    let color = this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];
    this.setState({
      backgroundColor: color
    });
  };
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ backgroundColor: this.state.backgroundColor, height: "100vh" }}
      >
        <Button type="primary" onClick={this.changeBackground}>
          Change Background
        </Button>
      </Row>
    );
  }
}

export default App;
